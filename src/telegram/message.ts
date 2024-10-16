import { BlockchainData } from '../web3/multicall.js';
import { roundDown } from '../utils/format.js';

export const bankXMsg = (data: BlockchainData): string => {
  const msg = `
<b><a href="https://app.bankx.io/">BANKX PRICES</a></b>

<i>Silver/gram:</i> <b>$${roundDown(data.agGramPrice, 2)}</b>

<b>ETH</b>
<i>XSD</i>: <b>$${roundDown(data.ethXsdPrice, 2)}</b>
<i>BankX</i>: <b>$${data.ethBankxPrice}</b>

<b>BNB</b>
<i>XSD:</i> <b>$${roundDown(data.bscXsdPrice, 2)}</b>
<i>BankX:</i> <b>$${data.bscBankxPrice}</b>

<b>ARB</b>
<i>XSD</i>: <b>$${roundDown(data.arbitrumXsdPrice, 2)}</b>
<i>BankX</i>: <b>$${data.arbitrumBankxPrice}</b>

<b>POL</b>
<i>XSD</i>: <b>$${roundDown(data.polygonXsdPrice, 2)}</b>
<i>BankX</i>: <b>$${data.polygonBankxPrice}</b>

<b>OPT</b>
<i>XSD</i>: <b>$${roundDown(data.optimismXsdPrice, 2)}</b>
<i>BankX</i>: <b>$${data.optimismBankxPrice}</b>

<b>AVAX</b>
<i>XSD</i>: <b>$${roundDown(data.avalancheXsdPrice, 2)}</b>
<i>BankX</i>: <b>$${data.avalancheBankxPrice}</b>

<b>FTM</b>
<i>XSD</i>: <b>$${roundDown(data.fantomXsdPrice, 2)}</b>
<i>BankX</i>: <b>$${data.fantomBankxPrice}</b>

<b><a href="https://app.bankx.io/#/pricing">Pricing Charts</a></b> | <b><a href="https://t.me/BankXPrices">Daily Prices</a></b>
`;

  return msg;
};
