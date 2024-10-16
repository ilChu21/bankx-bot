import 'dotenv/config';
import { sendBankxMsgs } from './telegram/send-telegram.js';

export const handler = async (event: any) => {
  try {
    await sendBankxMsgs();
    const response = {
      statusCode: 200,
      body: JSON.stringify('BankX Telegram message sent.'),
    };
    return response;
  } catch (error) {
    console.error(error);
  }
};
