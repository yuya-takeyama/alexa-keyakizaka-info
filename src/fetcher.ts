import axios from 'axios';
import { JSDOM } from 'jsdom';
import leftPad = require('left-pad');
import { first, map, tail, trim } from 'lodash';
import * as moment from 'moment';
import * as striptags from 'striptags';
import { BirthdayDate, BirthdayParameter } from './parseMonth';

const BASE_URL = 'http://www.keyakizaka46.com';

const toURL = (path: string): string => {
  return `${BASE_URL}${path}`;
};

export interface Schedule {
  title?: string;
  time: ScheduleTime;
  genre?: string;
  description?: string;
}

export interface ScheduleTime {
  from?: string;
  to?: string;
}

const normalize = (str: string | undefined | null): string | undefined => {
  return str ? trim(striptags(str)) || undefined : undefined;
};

export const parseTime = (time?: string): ScheduleTime => {
  if (time) {
    const [from, to] = time.split('～');
    return { from: normalize(from), to: normalize(to) };
  } else {
    return { from: undefined, to: undefined };
  }
};

const parseScheduleElement = (element: Element): Schedule | undefined => {
  const titleDescriptionElement = element.querySelector(
    '.box-detail_txt :last-child',
  );
  const genreElement = element.querySelector('.box-detail_genre');
  const timeElement = element.querySelector('.box-detail_txt .time');

  if (titleDescriptionElement) {
    const titleDescriptions = trim(
      striptags(titleDescriptionElement.innerHTML),
    ).split(/\n/);
    const title = first(titleDescriptions);
    const description = normalize(tail(titleDescriptions).join('\n'));
    const time = parseTime(
      timeElement ? normalize(timeElement.innerHTML) : undefined,
    );

    return {
      title,
      genre: genreElement ? normalize(genreElement.innerHTML) : undefined,
      time,
      description,
    };
  } else {
    return undefined;
  }
};

export const fetchSchedules = async (
  date: moment.Moment,
): Promise<Schedule[]> => {
  return new Promise<Schedule[]>(async (resolve, reject) => {
    try {
      const res = await axios.get(
        toURL(`/s/k46o/media/list?dy=${date.format('YYYYMMDD')}`),
      );
      const scheduleElements = new JSDOM(
        res.data,
      ).window.document.querySelectorAll(
        '#schedule .box-schedule_inner .box-detail',
      );
      const schedules = map(scheduleElements, element =>
        parseScheduleElement(element),
      ).filter(schedule => schedule) as Schedule[];

      resolve(schedules);
    } catch (err) {
      reject(err);
    }
  });
};

interface JSONBirthday {
  title: string;
  start: string;
  className: string;
  description: string;
}

interface Birthday {
  date: moment.Moment;
  name: string;
}

interface ParseBirthDaysSuccess {
  birthdays: Birthday[];
  error: undefined;
}

interface ParseBirthDaysFailure {
  birthdays: Birthday[];
  error: Error;
}

type ParseBirthDaysResult = ParseBirthDaysSuccess | ParseBirthDaysFailure;

const toBirthday = (json: JSONBirthday): Birthday => {
  return {
    date: moment(json.start),
    name: json.title.replace(/の誕生日$/, ''),
  };
};

const matchBirthday = (birthday: JSONBirthday, time: BirthdayDate): boolean => {
  const matches = birthday.start.match(/^\d{4}-(\d{2})-(\d{2})$/);
  if (matches && matches[1] && matches[2]) {
    return (
      parseInt(matches[1], 10) === time.month &&
      parseInt(matches[2], 10) === time.day
    );
  } else {
    throw new Error(`Invalid date format in JSON: ${birthday.start}`);
  }
};

type BirthdaysFilter = (birthday: JSONBirthday) => boolean;

const birthdaysFilter = (time: BirthdayParameter): BirthdaysFilter => {
  if (time.type === 'month') {
    return b => b.className === 'birthday';
  } else {
    return b => b.className === 'birthday' && matchBirthday(b, time);
  }
};

export const toValidJSON = (js: string): string => {
  return js
    .replace(/([a-zA-Z]+):/g, '"$1":')
    .replace(/'(.*)'(,?)/g, (_, p1, p2) => `${JSON.stringify(p1)}${p2}`);
};

const toBirthdays = (json: string, time: BirthdayParameter): Birthday[] => {
  const jsonBirthdays: JSONBirthday[] = JSON.parse(json);
  return jsonBirthdays
    .filter(birthdaysFilter(time))
    .map((birthday: JSONBirthday): Birthday => toBirthday(birthday));
};

const parseBirthdays = (
  data: string,
  time: BirthdayParameter,
): ParseBirthDaysResult => {
  const matches = data.match(/var scheduleEvents\s*=\s*(\[[\s\S]+\}\s*\])/);

  if (matches && matches[1]) {
    return {
      birthdays: toBirthdays(toValidJSON(matches[1]), time),
      error: undefined,
    };
  } else {
    return {
      birthdays: [],
      error: new Error('scheduleEvents variable did not match'),
    };
  }
};

const toMonthParameter = (time: BirthdayParameter): string => {
  if (time.type === 'month') {
    return `${time.year}${leftPad(time.month, 2, '0')}01`;
  } else {
    return `${time.year}${leftPad(time.month, 2, '0')}${leftPad(
      time.day,
      2,
      '0',
    )}`;
  }
};

export const fetchBirthdays = async (
  time: BirthdayParameter,
): Promise<Birthday[]> => {
  return new Promise<Birthday[]>(async (resolve, reject) => {
    try {
      const res = await axios.get<string>(
        toURL(`/s/k46o/media/list?dy=${toMonthParameter(time)}`),
      );
      const birthdaysResult = parseBirthdays(res.data, time);

      if (birthdaysResult.error) {
        throw birthdaysResult.error;
      } else {
        resolve(birthdaysResult.birthdays);
      }
    } catch (err) {
      reject(err);
    }
  });
};
