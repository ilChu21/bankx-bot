import TelegramBot, { SendMessageOptions } from 'node-telegram-bot-api';

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

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

export const opts = (msgThreadId: number | undefined): SendMessageOptions => {
  return {
    message_thread_id: msgThreadId,
    parse_mode: 'HTML',
    disable_web_page_preview: true,
  };
};

export const sendTelegramMsg = async (
  bot: TelegramBot,
  msg: string,
  chatId: string,
  threadId: number | undefined
): Promise<void> => {
  try {
    await bot.sendMessage(chatId, msg, opts(threadId));
  } catch (error) {
    console.error('❌ sendTelegramMsg() error!', error);
    throw error;
  }
};

export const sendMessages = async (
  bot: TelegramBot,
  messages: string[],
  chatId: string,
  threadIds?: (string | undefined)[],
  withThreads: boolean = false
) => {
  const messageDelay = 750;

  for (let i = 0; i < messages.length; i++) {
    const threadId = withThreads ? Number(threadIds![i]) : undefined;
    await sendTelegramMsg(bot, messages[i], chatId, threadId);
    await sleep(messageDelay);
  }
};
