import { parseTime } from "./fetcher";

describe('#parseTime', () => {
  describe('when the time is undefined', () => {
    it('returns from and to as undefined', () => {
      expect(parseTime(undefined)).toEqual({ from: undefined, to: undefined });
    });
  });

  describe('when the time has both of from and to', () => {
    it('returns from and to', () => {
      expect(parseTime('19:00～20:00')).toEqual({ from: '19:00', to: '20:00' });
    });
  });

  describe('when the time has from only', () => {
    it('returns from only', () => {
      expect(parseTime('19:00～')).toEqual({ from: '19:00', to: undefined });
    });
  });

  describe('when the time has to only', () => {
    it('returns to only', () => {
      expect(parseTime('～20:00')).toEqual({ from: undefined, to: '20:00' });
    });
  });
});
