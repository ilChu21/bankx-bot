import { BlockchainData } from '../../web3/multicall.js';
import { Calculations } from '../../web3/calculations.js';
import { roundDown } from '../../utils/format.js';

export const fantomMsg = (
  data: BlockchainData,
  calcs: Calculations
): string => {
  const msg = `
<b><a href="https://app.bankx.io/">FANTOM</a></b>

<i>Silver/gram:</i> <b>$${roundDown(calcs.agGramPrice, 2)}</b>
<i>FTM:</i> <b>$${roundDown(data.ftmPrice, 2)}</b>

<b>XSD</b>
<i>Price:</i> <b>$${roundDown(data.fantomXsdPrice, 2)} (${roundDown(
    calcs.fantomDiscount,
    2
  )}% - ${calcs.fantomAction})</b>
<i>Liquidity:</i> <b>$${roundDown(data.fantomXsdLiquidity, 2)}</b>
    
<b>BankX</b>
<i>Price:</i> <b>$${data.fantomBankxPrice}</b>
<i>Liquidity:</i> <b>$${roundDown(data.fantomBankxLiquidity, 2)}</b>
`;

  return msg;
};

// <i>Market Cap:</i> <b>$${formatNumberWithSuffix(calcs.fantomMarketCap)}</b>
