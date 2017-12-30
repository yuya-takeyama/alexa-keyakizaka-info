import * as moment from 'moment-timezone';
import { Schedule } from './fetcher';
import { formatSchedules } from './formatter';

describe('#formatSchedules', () => {
  const date = moment.tz('2017-12-31', 'Asia/Tokyo');

  describe('with no schedules', () => {
    it('returns a schedule script correctly', () => {
      expect(formatSchedules([], date)).toMatchSnapshot();
    });
  });

  describe('with a single schedule', () => {
    it('returns a schedule script correctly', () => {
      const schedules: Schedule[] = [{
        title: '歌番組に出演',
        genre: 'テレビ',
        time: {
          from: '19:00',
          to: '20:00',
        },
        description: undefined,
      }];
      expect(formatSchedules(schedules, date)).toMatchSnapshot();
    });
  });

  describe('with multiple schedules', () => {
    it('returns a schedule script correctly', () => {
      const schedules: Schedule[] = [
        {
          title: '歌番組に出演',
          genre: 'テレビ',
          time: {
            from: '19:00',
            to: '20:00',
          },
          description: undefined,
        },
        {
          title: '平手友梨奈の誕生日',
          genre: '誕生日',
          time: {},
          description: '平手友梨奈の誕生日です。',
        },
        {
          title: '欅坂46 こちら有楽町星空放送局',
          genre: 'ラジオ',
          time: {
            from: '24:20',
            to: '24:40',
          },
          description: undefined,
        },
      ];
      expect(formatSchedules(schedules, date)).toMatchSnapshot();
    });
  });
});
