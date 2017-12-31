import * as Alexa from 'alexa-sdk';
import * as moment from 'moment';
import { fetchBirthdays, fetchSchedules } from './fetcher';
import { formatBirthdays, formatSchedules } from './formatter';
import parseMonth from './parseMonth';

const handlers: Alexa.Handlers<any> = {
  LaunchRequest() {
    this.emit('GetSchedules');
  },
  async GetSchedules() {
    const slots = this.event.request.intent.slots;
    const date = moment(slots.Date.value);
    try {
      const schedules = await fetchSchedules(date);
      const script = formatSchedules(schedules, date);
      this.response.speak(script);
      console.info(script);
    } catch (e) {
      this.response.speak('スケジュールの取得に失敗しました');
      console.error(`Failed to fetch schedules: ${e.message}`);
    }
    this.emit(':responseReady');
  },
  async GetBirthdays() {
    const slots = this.event.request.intent.slots;
    const time = parseMonth(slots.Date.value);
    try {
      const birthdays = await fetchBirthdays(time);
      const script = formatBirthdays(birthdays, time);
      this.response.speak(script);
      console.info(script);
    } catch (e) {
      this.response.speak('誕生日の取得に失敗しました');
      console.error(`Failed to fetch birthdays: ${e.message}`);
    }
    this.emit(':responseReady');
  },
  Unhandled() {
    this.response.speak('不明なコマンドです');
    this.emit(':responseReady');
  },
};

export const handler = (
  event: Alexa.RequestBody<any>,
  context: Alexa.Context,
) => {
  console.info(`event: ${JSON.stringify(event)}`);
  console.info(`context: ${JSON.stringify(context)}`);

  const alexa = Alexa.handler(event, context);

  alexa.registerHandlers(handlers);
  alexa.execute();
};
