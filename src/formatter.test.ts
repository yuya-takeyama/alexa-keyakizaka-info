import * as moment from 'moment';
import { Schedule, Birthday } from './fetcher';
import { formatSchedules, formatBirthdays } from './formatter';
import { BirthdayMonth, BirthdayDate } from './parseMonth';

describe('#formatSchedules', () => {
  const date = moment('2017-12-31');

  describe('with no schedules', () => {
    it('returns a schedule script correctly', () => {
      expect(formatSchedules([], date)).toMatchSnapshot();
    });
  });

  describe('with a single schedule', () => {
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
      ];
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

describe('#formatBirthdays', () => {
  describe('with BirthdayMonth', () => {
    const time: BirthdayMonth = {
      type: 'month',
      year: 2017,
      month: 11,
    };

    describe('with no schedules', () => {
      it('returns a schedule script correctly', () => {
        expect(formatBirthdays([], time)).toMatchSnapshot();
      });
    });

    describe('with a single schedule', () => {
      it('returns a schedule script correctly', () => {
        const birthdays: Birthday[] = [
          {
            date: moment('2017-06-25'),
            name: '平手友梨奈',
          },
        ];
        expect(formatBirthdays(birthdays, time)).toMatchSnapshot();
      });
    });

    describe('with multiple schedules', () => {
      it('returns a schedule script correctly', () => {
        const schedules: Birthday[] = [
          {
            date: moment('2017-06-04'),
            name: '織田奈那',
          },
          {
            date: moment('2017-06-25'),
            name: '平手友梨奈',
          },
        ];
        expect(formatBirthdays(schedules, time)).toMatchSnapshot();
      });
    });
  });

  describe('with BirthdayDate', () => {
    const time: BirthdayDate = {
      type: 'date',
      year: 2017,
      month: 6,
      day: 25,
    };

    describe('with no schedules', () => {
      it('returns a schedule script correctly', () => {
        expect(formatBirthdays([], time)).toMatchSnapshot();
      });
    });

    describe('with a single schedule', () => {
      it('returns a schedule script correctly', () => {
        const birthdays: Birthday[] = [
          {
            date: moment('2017-06-25'),
            name: '平手友梨奈',
          },
        ];
        expect(formatBirthdays(birthdays, time)).toMatchSnapshot();
      });
    });

    describe('with multiple schedules', () => {
      it('returns a schedule script correctly', () => {
        const schedules: Birthday[] = [
          {
            date: moment('2017-06-25'),
            name: '平手友梨奈',
          },
          {
            date: moment('2017-06-25'),
            name: '平手友梨奈2',
          },
        ];
        expect(formatBirthdays(schedules, time)).toMatchSnapshot();
      });
    });
  });
});
