import {
  ethClient,
  bscClient,
  arbitrumClient,
  polygonClient,
  optimismClient,
  fantomClient,
  avalancheClient,
} from './client.js';
import { contracts } from './contracts.js';
import { formatUnits } from 'viem';

export interface BlockchainData {
  ethPrice: number;
  ethBankxPrice: number;
  ethXsdPrice: number;
  ethXsdLiquidity: number;
  ethBankxLiquidity: number;
  ethXsdTotalSupply: number;
  bscPrice: number;
  bscAgPrice: number;
  bscBankxPrice: number;
  bscXsdPrice: number;
  bscXsdLiquidity: number;
  bscBankxLiquidity: number;
  bscXsdTotalSupply: number;
  arbitrumBankxPrice: number;
  arbitrumXsdPrice: number;
  arbitrumXsdLiquidity: number;
  arbitrumBankxLiquidity: number;
  arbitrumXsdTotalSupply: number;
  polPrice: number;
  polygonBankxPrice: number;
  polygonXsdPrice: number;
  polygonXsdLiquidity: number;
  polygonBankxLiquidity: number;
  polygonXsdTotalSupply: number;
  optimismBankxPrice: number;
  optimismXsdPrice: number;
  optimismXsdLiquidity: number;
  optimismBankxLiquidity: number;
  optimismXsdTotalSupply: number;
  avaxPrice: number;
  avalancheBankxPrice: number;
  avalancheXsdPrice: number;
  avalancheXsdLiquidity: number;
  avalancheBankxLiquidity: number;
  avalancheXsdTotalSupply: number;
  ftmPrice: number;
  fantomBankxPrice: number;
  fantomXsdPrice: number;
  fantomXsdLiquidity: number;
  fantomBankxLiquidity: number;
  fantomXsdTotalSupply: number;
}

const getEthData = async () => {
  const results = await ethClient.multicall({
    contracts: [
      {
        ...contracts.chainlinkEth,
        functionName: 'latestAnswer',
      },
      {
        ...contracts.pidEth,
        functionName: 'bankx_updated_price',
      },
      {
        ...contracts.pidEth,
        functionName: 'xsd_updated_price',
      },
      {
        ...contracts.xsdEthPool,
        functionName: 'collatDollarBalance',
      },
      {
        ...contracts.bankxEthPool,
        functionName: 'collatDollarBalance',
      },
      {
        ...contracts.xsdEth,
        functionName: 'decimals',
      },
      {
        ...contracts.xsdEth,
        functionName: 'totalSupply',
      },
    ],
  });

  const data = {
    ethPrice: Number(formatUnits(results[0].result as bigint, 8)),
    ethBankxPrice: Number(formatUnits(results[1].result as bigint, 6)),
    ethXsdPrice: Number(formatUnits(results[2].result as bigint, 6)),
    ethXsdLiquidity: Number(formatUnits(results[3].result as bigint, 18)),
    ethBankxLiquidity: Number(formatUnits(results[4].result as bigint, 18)),
    ethXsdDecimals: Number(results[5].result),
    ethXsdTotalSupply: Number(
      formatUnits(results[6].result as bigint, Number(results[5].result))
    ),
  };

  return data;
};

const getBscData = async () => {
  const results = await bscClient.multicall({
    contracts: [
      {
        ...contracts.chainlinkBnb,
        functionName: 'latestAnswer',
      },
      {
        ...contracts.chainlinkXag,
        functionName: 'latestAnswer',
      },
      {
        ...contracts.pidBsc,
        functionName: 'bankx_updated_price',
      },
      {
        ...contracts.pidBsc,
        functionName: 'xsd_updated_price',
      },
      {
        ...contracts.xsdBnbPool,
        functionName: 'collatDollarBalance',
      },
      {
        ...contracts.bankxBnbPool,
        functionName: 'collatDollarBalance',
      },
      {
        ...contracts.xsdBsc,
        functionName: 'decimals',
      },
      {
        ...contracts.xsdBsc,
        functionName: 'totalSupply',
      },
    ],
  });

  const data = {
    bscPrice: Number(formatUnits(results[0].result as bigint, 8)),
    bscAgPrice: Number(formatUnits(results[1].result as bigint, 8)),
    bscBankxPrice: Number(formatUnits(results[2].result as bigint, 6)),
    bscXsdPrice: Number(formatUnits(results[3].result as bigint, 6)),
    bscXsdLiquidity: Number(formatUnits(results[4].result as bigint, 18)),
    bscBankxLiquidity: Number(formatUnits(results[5].result as bigint, 18)),
    bscXsdDecimals: Number(results[6].result),
    bscXsdTotalSupply: Number(
      formatUnits(results[7].result as bigint, Number(results[6].result))
    ),
  };

  return data;
};

const getArbitrumData = async () => {
  const results = await arbitrumClient.multicall({
    contracts: [
      {
        ...contracts.pidArbitrum,
        functionName: 'bankx_updated_price',
      },
      {
        ...contracts.pidArbitrum,
        functionName: 'xsd_updated_price',
      },
      {
        ...contracts.xsdArbitrumPool,
        functionName: 'collatDollarBalance',
      },
      {
        ...contracts.bankxArbitrumPool,
        functionName: 'collatDollarBalance',
      },
      {
        ...contracts.xsdArbitrum,
        functionName: 'decimals',
      },
      {
        ...contracts.xsdArbitrum,
        functionName: 'totalSupply',
      },
    ],
  });

  const data = {
    arbitrumBankxPrice: Number(formatUnits(results[0].result as bigint, 6)),
    arbitrumXsdPrice: Number(formatUnits(results[1].result as bigint, 6)),
    arbitrumXsdLiquidity: Number(formatUnits(results[2].result as bigint, 18)),
    arbitrumBankxLiquidity: Number(
      formatUnits(results[3].result as bigint, 18)
    ),
    arbitrumXsdDecimals: Number(results[4].result),
    arbitrumXsdTotalSupply: Number(
      formatUnits(results[5].result as bigint, Number(results[4].result))
    ),
  };

  return data;
};

const getPolygonData = async () => {
  const results = await polygonClient.multicall({
    contracts: [
      {
        ...contracts.chainlinkPol,
        functionName: 'latestAnswer',
      },
      {
        ...contracts.pidPolygon,
        functionName: 'bankx_updated_price',
      },
      {
        ...contracts.pidPolygon,
        functionName: 'xsd_updated_price',
      },
      {
        ...contracts.xsdPolygonPool,
        functionName: 'collatDollarBalance',
      },
      {
        ...contracts.bankxPolygonPool,
        functionName: 'collatDollarBalance',
      },
      {
        ...contracts.xsdPolygon,
        functionName: 'decimals',
      },
      {
        ...contracts.xsdPolygon,
        functionName: 'totalSupply',
      },
    ],
  });

  const data = {
    polPrice: Number(formatUnits(results[0].result as bigint, 8)),
    polygonBankxPrice: Number(formatUnits(results[1].result as bigint, 6)),
    polygonXsdPrice: Number(formatUnits(results[2].result as bigint, 6)),
    polygonXsdLiquidity: Number(formatUnits(results[3].result as bigint, 18)),
    polygonBankxLiquidity: Number(formatUnits(results[4].result as bigint, 18)),
    polygonXsdDecimals: Number(results[5].result),
    polygonXsdTotalSupply: Number(
      formatUnits(results[6].result as bigint, Number(results[5].result))
    ),
  };

  return data;
};

const getOptimismData = async () => {
  const results = await optimismClient.multicall({
    contracts: [
      {
        ...contracts.pidOptimism,
        functionName: 'bankx_updated_price',
      },
      {
        ...contracts.pidOptimism,
        functionName: 'xsd_updated_price',
      },
      {
        ...contracts.xsdOptimismPool,
        functionName: 'collatDollarBalance',
      },
      {
        ...contracts.bankxOptimismPool,
        functionName: 'collatDollarBalance',
      },
      {
        ...contracts.xsdOptimism,
        functionName: 'decimals',
      },
      {
        ...contracts.xsdOptimism,
        functionName: 'totalSupply',
      },
    ],
  });

  const data = {
    optimismBankxPrice: Number(formatUnits(results[0].result as bigint, 6)),
    optimismXsdPrice: Number(formatUnits(results[1].result as bigint, 6)),
    optimismXsdLiquidity: Number(formatUnits(results[2].result as bigint, 18)),
    optimismBankxLiquidity: Number(
      formatUnits(results[3].result as bigint, 18)
    ),
    optimismXsdDecimals: Number(results[4].result),
    optimismXsdTotalSupply: Number(
      formatUnits(results[5].result as bigint, Number(results[4].result))
    ),
  };

  return data;
};

const getAvalancheData = async () => {
  const results = await avalancheClient.multicall({
    contracts: [
      {
        ...contracts.chainlinkAvax,
        functionName: 'latestAnswer',
      },
      {
        ...contracts.pidAvalanche,
        functionName: 'bankx_updated_price',
      },
      {
        ...contracts.pidAvalanche,
        functionName: 'xsd_updated_price',
      },
      {
        ...contracts.xsdAvalanchePool,
        functionName: 'collatDollarBalance',
      },
      {
        ...contracts.bankxAvalanchePool,
        functionName: 'collatDollarBalance',
      },
      {
        ...contracts.xsdAvalanche,
        functionName: 'decimals',
      },
      {
        ...contracts.xsdAvalanche,
        functionName: 'totalSupply',
      },
    ],
  });

  const data = {
    avaxPrice: Number(formatUnits(results[0].result as bigint, 8)),
    avalancheBankxPrice: Number(formatUnits(results[1].result as bigint, 6)),
    avalancheXsdPrice: Number(formatUnits(results[2].result as bigint, 6)),
    avalancheXsdLiquidity: Number(formatUnits(results[3].result as bigint, 18)),
    avalancheBankxLiquidity: Number(
      formatUnits(results[4].result as bigint, 18)
    ),
    avalancheXsdDecimals: Number(results[5].result),
    avalancheXsdTotalSupply: Number(
      formatUnits(results[6].result as bigint, Number(results[5].result))
    ),
  };

  return data;
};

const getFantomData = async () => {
  const results = await fantomClient.multicall({
    contracts: [
      {
        ...contracts.chainlinkFtm,
        functionName: 'latestAnswer',
      },
      {
        ...contracts.pidFantom,
        functionName: 'bankx_updated_price',
      },
      {
        ...contracts.pidFantom,
        functionName: 'xsd_updated_price',
      },
      {
        ...contracts.xsdFantomPool,
        functionName: 'collatDollarBalance',
      },
      {
        ...contracts.bankxFantomPool,
        functionName: 'collatDollarBalance',
      },
      {
        ...contracts.xsdFantom,
        functionName: 'decimals',
      },
      {
        ...contracts.xsdFantom,
        functionName: 'totalSupply',
      },
    ],
  });

  const data = {
    ftmPrice: Number(formatUnits(results[0].result as bigint, 8)),
    fantomBankxPrice: Number(formatUnits(results[1].result as bigint, 6)),
    fantomXsdPrice: Number(formatUnits(results[2].result as bigint, 6)),
    fantomXsdLiquidity: Number(formatUnits(results[3].result as bigint, 18)),
    fantomBankxLiquidity: Number(formatUnits(results[4].result as bigint, 18)),
    fantomXsdDecimals: Number(results[5].result),
    fantomXsdTotalSupply: Number(
      formatUnits(results[6].result as bigint, Number(results[5].result))
    ),
  };

  return data;
};

export const getBlockchainData = async () => {
  const ethData = await getEthData();
  const bscData = await getBscData();
  const arbitrumData = await getArbitrumData();
  const polygonData = await getPolygonData();
  const optimismData = await getOptimismData();
  const avalancheData = await getAvalancheData();
  const fantomData = await getFantomData();

  const data = {
    ...ethData,
    ...bscData,
    ...arbitrumData,
    ...polygonData,
    ...optimismData,
    ...avalancheData,
    ...fantomData,
  };

  return data;
};
