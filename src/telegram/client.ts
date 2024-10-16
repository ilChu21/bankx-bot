import { TELEGRAM_API_KEY } from '../utils/env-vars.js';
import TelegramBot from 'node-telegram-bot-api';

const token = TELEGRAM_API_KEY;
export const bot = new TelegramBot(token, { polling: false });
