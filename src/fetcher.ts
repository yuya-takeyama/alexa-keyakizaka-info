import axios from 'axios';
import { JSDOM } from 'jsdom';
import { first, map, tail, trim } from 'lodash';
import * as moment from 'moment';
import * as striptags from 'striptags';

const BASE_URL = 'http://www.keyakizaka46.com';

const toURL = (path: string): string => {
  return `${BASE_URL}${path}`;
};

export interface Schedule {
  title?: string;
  time?: string;
  genre?: string;
  description?: string;
}

const normalize = (str: string | undefined | null): string | undefined => {
  return str ? trim(striptags(str)) || undefined : undefined;
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

    return {
      title,
      genre: genreElement ? normalize(genreElement.innerHTML) : undefined,
      time: timeElement ? normalize(timeElement.innerHTML) : undefined,
      description,
    };
  } else {
    return undefined;
  }
};

const today = (): moment.Moment => moment.utc({ hour: 0 });

export const fetchSchedules = async (
  date: moment.Moment = today(),
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
