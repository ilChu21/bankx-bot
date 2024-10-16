import { BlockchainData } from '../../web3/multicall.js';
import { Calculations } from '../../web3/calculations.js';
import { roundDown } from '../../utils/format.js';

export const avalancheMsg = (
  data: BlockchainData,
  calcs: Calculations
): string => {
  const msg = `
<b><a href="https://app.bankx.io/">AVALANCHE</a></b>

<i>Silver/gram:</i> <b>$${roundDown(calcs.agGramPrice, 2)}</b>
<i>AVAX:</i> <b>$${roundDown(data.avaxPrice, 2)}</b>

<b>XSD</b>
<i>Price:</i> <b>$${roundDown(data.avalancheXsdPrice, 2)} (${roundDown(
    calcs.avalancheDiscount,
    2
  )}% - ${calcs.avalancheAction})</b>
<i>Liquidity:</i> <b>$${roundDown(data.avalancheXsdLiquidity, 2)}</b>
    
<b>BankX</b>
<i>Price:</i> <b>$${data.avalancheBankxPrice}</b>
<i>Liquidity:</i> <b>$${roundDown(data.avalancheBankxLiquidity, 2)}</b>
`;

  return msg;
};

// <i>Market Cap:</i> <b>$${formatNumberWithSuffix(calcs.avalancheMarketCap)}</b>
