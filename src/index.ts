import * as Alexa from 'alexa-sdk';
import * as moment from 'moment-timezone';
import { fetchSchedules } from './fetcher';
import { formatSchedules } from './formatter';

const handlers: Alexa.Handlers<any> = {
  LaunchRequest() {
    this.emit('GetSchedules');
  },
  async GetSchedules() {
    const slots = this.event.request.intent.slots;
    const date = moment.tz(slots.Date.value, 'Asia/Tokyo');
    try {
      const schedules = await fetchSchedules(date);
      const script = formatSchedules(schedules, date);
      this.response.speak(script);
      console.info(script)
    } catch (e) {
      this.response.speak('スケジュールの取得に失敗しました');
      console.error(`Failed to fetch schedules: ${e.message}`);
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
