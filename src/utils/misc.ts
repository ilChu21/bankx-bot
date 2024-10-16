import { SendMessageOptions } from 'node-telegram-bot-api';

export const isDayAt = (
  dayOfWeek: number,
  hour: number,
  minute: number
): boolean => {
  const now = new Date();

  const isDayMatch = now.getDay() === dayOfWeek;
  const isHourMatch = now.getHours() === hour;
  const isMinuteMatch = now.getMinutes() === minute;

  return isDayMatch && isHourMatch && isMinuteMatch;
};

export const opts = (): SendMessageOptions => {
  return {
    parse_mode: 'HTML',
    disable_web_page_preview: true,
  };
};
