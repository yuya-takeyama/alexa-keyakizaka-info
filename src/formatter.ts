import { Schedule } from "./fetcher";

const formatSchedule = (schedule: Schedule): string => {
  return [schedule.time, schedule.genre, schedule.title]
    .filter(elem => elem)
    .join(' ');
};

export const formatSchedules = (schedules: Schedule[]): string => {
  const script = schedules.reduce((prev, schedule) => {
    return prev + formatSchedule(schedule) + '\n';
  }, '');
  return `今日のスケジュールは${schedules.length}件です。\n${script}`;
}
