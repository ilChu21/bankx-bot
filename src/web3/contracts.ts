import { parseAbi } from 'viem';

const chainlinkAbi = parseAbi([
  'function latestAnswer() view returns (int256)',
]);

const pidAbi = parseAbi([
  'function bankx_updated_price() view returns (uint256)',
  'function xsd_updated_price() view returns (uint256)',
]);

export const contracts = {
  chainlinkXag: {
    address: '0x817326922c909b16944817c207562B25C4dF16aD',
    abi: chainlinkAbi,
  },
  pidBsc: {
    address: '0xF441252DE7972B269cE954d82bE8b127a815Ecfb',
    abi: pidAbi,
  },
  pidEth: {
    address: '0x5997a08fD19bB3E397b25d41c1c10D2F2E0299F7',
    abi: pidAbi,
  },
  pidArbitrum: {
    address: '0x75c72ea2925aE17c59B2e9fD7651f986fAF1673f',
    abi: pidAbi,
  },
  pidPolygon: {
    address: '0xCedfEb69C150AD62A164C5B0bc55718913F9b0D8',
    abi: pidAbi,
  },
  pidOptimism: {
    address: '0x3f83f15521643De6aEFe7A16571332180bf09cD1',
    abi: pidAbi,
  },
  pidAvalanche: {
    address: '0xb2ae29742A350F924b870E4aDBAbb967f5DeE8d4',
    abi: pidAbi,
  },
  pidFantom: {
    address: '0x41e9f4c0E1882B69834Af8f01b951384EbE0EbCD',
    abi: pidAbi,
  },
} as const;
