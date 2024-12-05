import { BANKX_CHAT_ID, CHAT_ID } from '../utils/env-vars.js';
import { bot } from './client.js';
import { getBlockchainData } from '../web3/multicall.js';
import { isDayAt, opts, retryOperation } from '../utils/misc.js';
import { bankXMsg } from './message.js';

export const sendBankxMsgs = async (): Promise<void> => {
  const data = await getBlockchainData();
  const bankXMessage = bankXMsg(data);

  if (isDayAt(3, 19, 0o0)) {
    await bot.sendMessage(BANKX_CHAT_ID, bankXMessage, opts());
  }

  const sentMsg = await bot.sendMessage(CHAT_ID, bankXMessage, opts());
  const lastSentMessageId = sentMsg.message_id;
  await retryOperation(
    () => bot.deleteMessage(CHAT_ID, lastSentMessageId - 1),
    5
  );
};
