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
  agGramPrice: number;
  ethBankxPrice: number;
  ethXsdPrice: number;
  bscAgPrice: number;
  bscBankxPrice: number;
  bscXsdPrice: number;
  arbitrumBankxPrice: number;
  arbitrumXsdPrice: number;
  polygonBankxPrice: number;
  polygonXsdPrice: number;
  optimismBankxPrice: number;
  optimismXsdPrice: number;
  avalancheBankxPrice: number;
  avalancheXsdPrice: number;
  fantomBankxPrice: number;
  fantomXsdPrice: number;
}

const getEthData = async () => {
  const results = await ethClient.multicall({
    contracts: [
      {
        ...contracts.pidEth,
        functionName: 'bankx_updated_price',
      },
      {
        ...contracts.pidEth,
        functionName: 'xsd_updated_price',
      },
    ],
  });

  const data = {
    ethBankxPrice: Number(formatUnits(results[0].result as bigint, 6)),
    ethXsdPrice: Number(formatUnits(results[1].result as bigint, 6)),
  };

  return data;
};

const getBscData = async () => {
  const results = await bscClient.multicall({
    contracts: [
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
    ],
  });

  const data = {
    bscAgPrice: Number(formatUnits(results[0].result as bigint, 8)),
    bscBankxPrice: Number(formatUnits(results[1].result as bigint, 6)),
    bscXsdPrice: Number(formatUnits(results[2].result as bigint, 6)),
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
    ],
  });

  const data = {
    arbitrumBankxPrice: Number(formatUnits(results[0].result as bigint, 6)),
    arbitrumXsdPrice: Number(formatUnits(results[1].result as bigint, 6)),
  };

  return data;
};

const getPolygonData = async () => {
  const results = await polygonClient.multicall({
    contracts: [
      {
        ...contracts.pidPolygon,
        functionName: 'bankx_updated_price',
      },
      {
        ...contracts.pidPolygon,
        functionName: 'xsd_updated_price',
      },
    ],
  });

  const data = {
    polygonBankxPrice: Number(formatUnits(results[0].result as bigint, 6)),
    polygonXsdPrice: Number(formatUnits(results[1].result as bigint, 6)),
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
    ],
  });

  const data = {
    optimismBankxPrice: Number(formatUnits(results[0].result as bigint, 6)),
    optimismXsdPrice: Number(formatUnits(results[1].result as bigint, 6)),
  };

  return data;
};

const getAvalancheData = async () => {
  const results = await avalancheClient.multicall({
    contracts: [
      {
        ...contracts.pidAvalanche,
        functionName: 'bankx_updated_price',
      },
      {
        ...contracts.pidAvalanche,
        functionName: 'xsd_updated_price',
      },
    ],
  });

  const data = {
    avalancheBankxPrice: Number(formatUnits(results[0].result as bigint, 6)),
    avalancheXsdPrice: Number(formatUnits(results[1].result as bigint, 6)),
  };

  return data;
};

const getFantomData = async () => {
  const results = await fantomClient.multicall({
    contracts: [
      {
        ...contracts.pidFantom,
        functionName: 'bankx_updated_price',
      },
      {
        ...contracts.pidFantom,
        functionName: 'xsd_updated_price',
      },
    ],
  });

  const data = {
    fantomBankxPrice: Number(formatUnits(results[0].result as bigint, 6)),
    fantomXsdPrice: Number(formatUnits(results[1].result as bigint, 6)),
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

  const agGramPrice = Number(bscData.bscAgPrice) / 31.1034768;

  const data = {
    agGramPrice,
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
