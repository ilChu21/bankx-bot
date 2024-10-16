import {
  ARB_THREAD_ID,
  AVAX_THREAD_ID,
  BANKX_CHAT_ID,
  BSC_THREAD_ID,
  CHAT_ID,
  FTM_THREAD_ID,
  OPT_THREAD_ID,
  POL_THREAD_ID,
} from '../utils/env-vars.js';
import { bot } from './client.js';
import { getBlockchainData } from '../web3/multicall.js';
import { isDayAt, sendMessages } from '../utils/misc.js';
import { doCalcs } from '../web3/calculations.js';
import { ethMsg } from './messages/eth.js';
import { bscMsg } from './messages/bsc.js';
import { arbitrumMsg } from './messages/arbitrum.js';
import { polygonMsg } from './messages/polygon.js';
import { optimismMsg } from './messages/optimism.js';
import { fantomMsg } from './messages/fantom.js';
import { avalancheMsg } from './messages/avalanche.js';

export const sendBankxMsgs = async (): Promise<void> => {
  const data = await getBlockchainData();
  const calcs = await doCalcs(data);

  const [
    ethMessage,
    bscMessage,
    arbitrumMessage,
    polygonMessage,
    optimismMessage,
    avalancheMessage,
    fantomMessage,
  ] = await Promise.all([
    ethMsg(data, calcs),
    bscMsg(data, calcs),
    arbitrumMsg(data, calcs),
    polygonMsg(data, calcs),
    optimismMsg(data, calcs),
    avalancheMsg(data, calcs),
    fantomMsg(data, calcs),
  ]);

  const messages = [
    ethMessage,
    bscMessage,
    arbitrumMessage,
    polygonMessage,
    optimismMessage,
    avalancheMessage,
    fantomMessage,
  ];

  const threadIds = [
    undefined,
    BSC_THREAD_ID,
    ARB_THREAD_ID,
    POL_THREAD_ID,
    OPT_THREAD_ID,
    AVAX_THREAD_ID,
    FTM_THREAD_ID,
  ];

  if (isDayAt(3, 11, 37)) {
    sendMessages(bot, messages, BANKX_CHAT_ID);
  }

  await sendMessages(bot, messages, CHAT_ID, threadIds, true);
};
