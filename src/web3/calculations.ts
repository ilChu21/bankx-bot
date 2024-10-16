import { BlockchainData } from './multicall.js';

export interface Calculations {
  agGramPrice: number;
  bscDiscount: number;
  ethDiscount: number;
  arbitrumDiscount: number;
  polygonDiscount: number;
  optimismDiscount: number;
  avalancheDiscount: number;
  fantomDiscount: number;
  bscAction: string;
  ethAction: string;
  arbitrumAction: string;
  polygonAction: string;
  optimismAction: string;
  avalancheAction: string;
  fantomAction: string;
  bscMarketCap: number;
  ethMarketCap: number;
  arbitrumMarketCap: number;
  polygonMarketCap: number;
  optimismMarketCap: number;
  avalancheMarketCap: number;
  fantomMarketCap: number;
}

export const doCalcs = async (data: BlockchainData): Promise<Calculations> => {
  const agGramPrice = Number(data.bscAgPrice) / 31.1034768;

  const calculateDifference = (price: number) => agGramPrice - price;
  const calculateDiscount = (difference: number) =>
    (difference / agGramPrice) * 100;
  const determineAction = (difference: number) =>
    difference > 0 ? 'Buy' : 'Sell';
  const calculateMarketCap = (totalSupply: number, price: number) =>
    totalSupply * price;

  const differences = {
    bsc: calculateDifference(Number(data.bscXsdPrice)),
    eth: calculateDifference(Number(data.ethXsdPrice)),
    arbitrum: calculateDifference(Number(data.arbitrumXsdPrice)),
    polygon: calculateDifference(Number(data.polygonXsdPrice)),
    optimism: calculateDifference(Number(data.optimismXsdPrice)),
    avalanche: calculateDifference(Number(data.avalancheXsdPrice)),
    fantom: calculateDifference(Number(data.fantomXsdPrice)),
  };

  const discounts = {
    bsc: calculateDiscount(differences.bsc),
    eth: calculateDiscount(differences.eth),
    arbitrum: calculateDiscount(differences.arbitrum),
    polygon: calculateDiscount(differences.polygon),
    optimism: calculateDiscount(differences.optimism),
    avalanche: calculateDiscount(differences.avalanche),
    fantom: calculateDiscount(differences.fantom),
  };

  const actions = {
    bsc: determineAction(differences.bsc),
    eth: determineAction(differences.eth),
    arbitrum: determineAction(differences.arbitrum),
    polygon: determineAction(differences.polygon),
    optimism: determineAction(differences.optimism),
    avalanche: determineAction(differences.avalanche),
    fantom: determineAction(differences.fantom),
  };

  const marketCaps = {
    bsc: calculateMarketCap(data.bscXsdTotalSupply, data.bscXsdPrice),
    eth: calculateMarketCap(data.ethXsdTotalSupply, data.ethXsdPrice),
    arbitrum: calculateMarketCap(
      data.arbitrumXsdTotalSupply,
      data.arbitrumXsdPrice
    ),
    polygon: calculateMarketCap(
      data.polygonXsdTotalSupply,
      data.polygonXsdPrice
    ),
    optimism: calculateMarketCap(
      data.optimismXsdTotalSupply,
      data.optimismXsdPrice
    ),
    avalanche: calculateMarketCap(
      data.avalancheXsdTotalSupply,
      data.avalancheXsdPrice
    ),
    fantom: calculateMarketCap(data.fantomXsdTotalSupply, data.fantomXsdPrice),
  };

  return {
    agGramPrice,
    bscDiscount: discounts.bsc,
    ethDiscount: discounts.eth,
    arbitrumDiscount: discounts.arbitrum,
    polygonDiscount: discounts.polygon,
    optimismDiscount: discounts.optimism,
    avalancheDiscount: discounts.avalanche,
    fantomDiscount: discounts.fantom,
    bscAction: actions.bsc,
    ethAction: actions.eth,
    arbitrumAction: actions.arbitrum,
    polygonAction: actions.polygon,
    optimismAction: actions.optimism,
    avalancheAction: actions.avalanche,
    fantomAction: actions.fantom,
    bscMarketCap: marketCaps.bsc,
    ethMarketCap: marketCaps.eth,
    arbitrumMarketCap: marketCaps.arbitrum,
    polygonMarketCap: marketCaps.polygon,
    optimismMarketCap: marketCaps.optimism,
    avalancheMarketCap: marketCaps.avalanche,
    fantomMarketCap: marketCaps.fantom,
  };
};
