import { BlockchainData } from '../../web3/multicall.js';
import { Calculations } from '../../web3/calculations.js';
import { roundDown } from '../../utils/format.js';

export const arbitrumMsg = (
  data: BlockchainData,
  calcs: Calculations
): string => {
  const msg = `
<b><a href="https://app.bankx.io/">ARBITRUM</a></b>

<i>Silver/gram:</i> <b>$${roundDown(calcs.agGramPrice, 2)}</b>
<i>aETH:</i> <b>$${roundDown(data.ethPrice, 2)}</b>

<b>XSD</b>
<i>Price:</i> <b>$${roundDown(data.arbitrumXsdPrice, 2)} (${roundDown(
    calcs.arbitrumDiscount,
    2
  )}% - ${calcs.arbitrumAction})</b>
<i>Liquidity:</i> <b>$${roundDown(data.arbitrumXsdLiquidity, 2)}</b>
    
<b>BankX</b>
<i>Price:</i> <b>$${data.arbitrumBankxPrice}</b>
<i>Liquidity:</i> <b>$${roundDown(data.arbitrumBankxLiquidity, 2)}</b>
`;

  return msg;
};
