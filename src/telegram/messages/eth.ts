import { BlockchainData } from '../../web3/multicall.js';
import { Calculations } from '../../web3/calculations.js';
import { roundDown } from '../../utils/format.js';

export const ethMsg = (data: BlockchainData, calcs: Calculations): string => {
  const msg = `
<b><a href="https://app.bankx.io/">ETHEREUM</a></b>

<i>Silver/gram:</i> <b>$${roundDown(calcs.agGramPrice, 2)}</b>
<i>ETH</i>: <b>$${roundDown(data.ethPrice, 2)}</b>

<b>XSD</b>
<i>Price</i>: <b>$${roundDown(data.ethXsdPrice, 2)} (${roundDown(
    calcs.ethDiscount,
    2
  )}% - ${calcs.ethAction})</b>
<i>Liquidity</i>: <b>$${roundDown(data.ethXsdLiquidity, 2)}</b>
    
<b>BankX</b>
<i>Price</i>: <b>$${data.ethBankxPrice}</b>
<i>Liquidity</i>: <b>$${roundDown(data.ethBankxLiquidity, 2)}</b>
`;

  return msg;
};

// <i>Market Cap:</i> <b>$${formatNumberWithSuffix(calcs.ethMarketCap)}</b>
