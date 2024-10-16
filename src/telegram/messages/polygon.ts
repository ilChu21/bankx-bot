import { BlockchainData } from '../../web3/multicall.js';
import { Calculations } from '../../web3/calculations.js';
import { roundDown } from '../../utils/format.js';

export const polygonMsg = (
  data: BlockchainData,
  calcs: Calculations
): string => {
  const msg = `
<b><a href="https://app.bankx.io/">POLYGON</a></b>

<i>Silver/gram:</i> <b>$${roundDown(calcs.agGramPrice, 2)}</b>
<i>POL:</i> <b>$${roundDown(data.polPrice, 2)}</b>

<b>XSD</b>
<i>Price:</i> <b>$${roundDown(data.polygonXsdPrice, 2)} (${roundDown(
    calcs.polygonDiscount,
    2
  )}% - ${calcs.polygonAction})</b>
<i>Liquidity:</i> <b>$${roundDown(data.polygonXsdLiquidity, 2)}</b>
    
<b>BankX</b>
<i>Price:</i> <b>$${data.polygonBankxPrice}</b>
<i>Liquidity:</i> <b>$${roundDown(data.polygonBankxLiquidity, 2)}</b>
`;

  return msg;
};

// <i>Market Cap:</i> <b>$${formatNumberWithSuffix(calcs.polygonMarketCap)}</b>
