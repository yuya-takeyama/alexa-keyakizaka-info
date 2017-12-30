import * as Alexa from 'alexa-sdk';
import { fetchSchedules } from './fetcher';
import { formatSchedules } from './formatter';

const handlers: Alexa.Handlers<any> = {
  LaunchRequest() {
    this.emit('GetSchedules');
  },
  async GetSchedules() {
    try {
      const schedules = await fetchSchedules();
      const script = formatSchedules(schedules);
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
  const alexa = Alexa.handler(event, context);

  alexa.registerHandlers(handlers);
  alexa.execute();
};
