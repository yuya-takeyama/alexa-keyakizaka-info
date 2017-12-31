import { parseTime, toValidJSON } from './fetcher';

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

describe('#toValidJSON', () => {
  it('converts from JavaScript to JSON', () => {
    const js = `
[
{
    title: 'テレビ東京「木ドラ25」『Re:Mind』',
    start: '2017-11-02',
    className: 'media',
    description:'テレビ東京「木ドラ25」『Re:Mind』'
  },{
    title: '「MEN\'S NON-NO」12月号',
    start: '2017-11-10',
    className: 'media',
    description:'「MEN\'S NON-NO」12月号'
  },{
    title: '「FINEBOYS」12月号',
    start: '2017-11-10',
    className: 'media',
    description:'「FINEBOYS」12月号'
  }
]
    `;
    expect(toValidJSON(js)).toMatchSnapshot();
  });
});
