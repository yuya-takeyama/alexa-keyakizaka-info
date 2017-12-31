import parseMonth from './parseMonth';

describe('#parseMonth', () => {
  describe('when it\'s month', () => {
    it('returns BirthdayMonth', () => {
      expect(parseMonth('2017-12')).toEqual({ type: 'month', year: 2017, month: 12 });
    });
  });

  describe('when it\'s date', () => {
    it('returns BirthdayDate', () => {
      expect(parseMonth('2017-12-31')).toEqual({ type: 'date', year: 2017, month: 12, day: 31 });
    });
  });
});
