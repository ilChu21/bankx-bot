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
    address: '0x9Bca6740c6283b97aa2030715C88932D6D1e215E',
    abi: pidAbi,
  },
  pidEth: {
    address: '0x7942418efD38dd2e0C6E13574C168B3d2E7C0A3E',
    abi: pidAbi,
  },
  pidArbitrum: {
    address: '0x8DA85B822aC8767F6A987F0A662039734CC4f066',
    abi: pidAbi,
  },
  pidPolygon: {
    address: '0x016357A87EEf79BdC03B613FB4415c1486905977',
    abi: pidAbi,
  },
  pidOptimism: {
    address: '0x5997a08fD19bB3E397b25d41c1c10D2F2E0299F7',
    abi: pidAbi,
  },
  pidAvalanche: {
    address: '0x202f7F598765b78Ed53a268CCe4a4C9d1b391015',
    abi: pidAbi,
  },
  pidFantom: {
    address: '0x821327C122C4AA2314393785ABf5Af7Fb04F7A58',
    abi: pidAbi,
  },
} as const;
