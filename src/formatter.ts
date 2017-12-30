import { Moment } from "moment-timezone";
import { Schedule, ScheduleTime } from "./fetcher";

const formatTime = (time: ScheduleTime): string | undefined => {
  if (time.from || time.to) {
    return (time.from ? `${time.from}から` : '') +
    (time.to ? `${time.to}まで` : '');
  } else {
    return undefined;
  }
};

const formatSchedule = (schedule: Schedule): string => {
  return [formatTime(schedule.time), schedule.genre, schedule.title]
    .filter(elem => elem)
    .join(' ');
};

export const formatSchedules = (schedules: Schedule[], date: Moment): string => {
  const script = schedules.reduce((prev, schedule) => {
    return prev + formatSchedule(schedule) + '\n';
  }, '');
  return `${date.format('YYYY/MM/DD')}のスケジュールは${schedules.length}件です。\n${script}`;
}
