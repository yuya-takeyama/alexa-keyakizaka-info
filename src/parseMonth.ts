export type BirthdayParameter = BirthdayMonth | BirthdayDate;

export interface BirthdayMonth {
  type: 'month';
  year: number;
  month: number;
}

export interface BirthdayDate {
  type: 'date';
  year: number;
  month: number;
  day: number;
}

export default (str: string): BirthdayParameter => {
  const [year, month, day] = str.split('-');
  if (year && month) {
    if (day) {
      return {
        type: 'date',
        year: parseInt(year, 10),
        month: parseInt(month, 10),
        day: parseInt(day, 10),
      };
    } else {
      return {
        type: 'month',
        year: parseInt(year, 10),
        month: parseInt(month, 10),
      };
    }
  } else {
    throw new Error(`Invalid month|date format: ${str}`);
  }
};
