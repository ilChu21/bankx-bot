import { BlockchainData } from '../../web3/multicall.js';
import { Calculations } from '../../web3/calculations.js';
import { roundDown } from '../../utils/format.js';

export const bscMsg = (data: BlockchainData, calcs: Calculations): string => {
  const msg = `
<b><a href="https://app.bankx.io/">BSC</a></b>

<i>Silver/gram:</i> <b>$${roundDown(calcs.agGramPrice, 2)}</b>
<i>BNB:</i> <b>$${roundDown(data.bscPrice, 2)}</b>

<b>XSD</b>
<i>Price:</i> <b>$${roundDown(data.bscXsdPrice, 2)} (${roundDown(
    calcs.bscDiscount,
    2
  )}% - ${calcs.bscAction})</b>
<i>Liquidity:</i> <b>$${roundDown(data.bscXsdLiquidity, 2)}</b>
    
<b>BankX</b>
<i>Price:</i> <b>$${data.bscBankxPrice}</b>
<i>Liquidity:</i> <b>$${roundDown(data.bscBankxLiquidity, 2)}</b>
`;

  return msg;
};

// <i>Market Cap:</i> <b>$${formatNumberWithSuffix(calcs.bscMarketCap)}</b>
