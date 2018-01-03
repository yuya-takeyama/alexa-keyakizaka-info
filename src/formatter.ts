import { Moment } from 'moment';
import { Birthday, Schedule, ScheduleTime } from './fetcher';
import { BirthdayParameter } from './parseMonth';

const formatTime = (time: ScheduleTime): string | undefined => {
  if (time.from || time.to) {
    return (
      (time.from ? `${time.from}から` : '') + (time.to ? `${time.to}まで` : '')
    );
  } else {
    return undefined;
  }
};

const formatSchedule = (schedule: Schedule): string => {
  return [formatTime(schedule.time), schedule.genre, schedule.title]
    .filter(elem => elem)
    .join(' ');
};

export const formatSchedules = (
  schedules: Schedule[],
  date: Moment,
): string => {
  const script = schedules.reduce((prev, schedule) => {
    return prev + formatSchedule(schedule) + '、\n';
  }, '');
  return `${date.format('YYYY/MM/DD')}のスケジュールは${
    schedules.length
  }件です。\n${script}`;
};

const formatBirthdayParameter = (time: BirthdayParameter): string => {
  if (time.type === 'month') {
    return `${time.month}月`;
  } else {
    return `${time.month}月${time.day}日`;
  }
};

export const formatBirthdays = (
  birthdays: Birthday[],
  time: BirthdayParameter,
) => {
  const script = birthdays.reduce((prev, birthday) => {
    if (time.type === 'month') {
      return prev + `${birthday.date.format('DD日')}、${birthday.name}、\n`;
    } else {
      return prev + `${birthday.name}、\n`;
    }
  }, '');
  return (
    `${formatBirthdayParameter(time)}が誕生日のメンバーは${
      birthdays.length
    }人です。\n` + script
  );
};
