import { BlockchainData } from '../../web3/multicall.js';
import { Calculations } from '../../web3/calculations.js';
import { roundDown } from '../../utils/format.js';

export const optimismMsg = (
  data: BlockchainData,
  calcs: Calculations
): string => {
  const msg = `
<b><a href="https://app.bankx.io/">OPTIMISM</a></b>

<i>Silver/gram:</i> <b>$${roundDown(calcs.agGramPrice, 2)}</b>
<i>oETH:</i> <b>$${roundDown(data.ethPrice, 2)}</b>

<b>XSD</b>
<i>Price:</i> <b>$${roundDown(data.optimismXsdPrice, 2)} (${roundDown(
    calcs.optimismDiscount,
    2
  )}% - ${calcs.optimismAction})</b>
<i>Liquidity:</i> <b>$${roundDown(data.optimismXsdLiquidity, 2)}</b>
    
<b>BankX</b>
<i>Price:</i> <b>$${data.optimismBankxPrice}</b>
<i>Liquidity:</i> <b>$${roundDown(data.optimismBankxLiquidity, 2)}</b>
`;

  return msg;
};

// <i>Market Cap:</i> <b>$${formatNumberWithSuffix(calcs.optimismMarketCap)}</b>
