import { parseAbi } from 'viem';

const chainlinkAbi = parseAbi([
  'function latestAnswer() view returns (int256)',
]);

const pidAbi = parseAbi([
  'function bankx_updated_price() view returns (uint256)',
  'function xsd_updated_price() view returns (uint256)',
]);

const poolAbi = parseAbi([
  'function collatDollarBalance() view returns (uint256)',
]);

const xsdAbi = parseAbi([
  'function totalSupply() view returns (uint256)',
  'function decimals() view returns (uint8)',
]);

export const contracts = {
  chainlinkEth: {
    address: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    abi: chainlinkAbi,
  },
  chainlinkBnb: {
    address: '0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE',
    abi: chainlinkAbi,
  },
  chainlinkPol: {
    address: '0xAB594600376Ec9fD91F8e885dADF0CE036862dE0',
    abi: chainlinkAbi,
  },
  chainlinkAvax: {
    address: '0x0A77230d17318075983913bC2145DB16C7366156',
    abi: chainlinkAbi,
  },
  chainlinkFtm: {
    address: '0xf4766552D15AE4d256Ad41B6cf2933482B0680dc',
    abi: chainlinkAbi,
  },
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
  xsdBnbPool: {
    address: '0x8A4e0e2A778dF8cE4EA5D5108FFfE690CC9Ae07a',
    abi: poolAbi,
  },
  xsdEthPool: {
    address: '0x53f51fcDf06946AafE25F14d2f1C9B66E71Ca683',
    abi: poolAbi,
  },
  xsdArbitrumPool: {
    address: '0x0626A71D29f85c0fC665612623991Aa2EA2EAB62',
    abi: poolAbi,
  },
  xsdPolygonPool: {
    address: '0x58421507d10A4c57a761E8AAd5382D5564A682F5',
    abi: poolAbi,
  },
  xsdOptimismPool: {
    address: '0xaB1c27a3B78d9afCDe9963780af4Ff48D6b816A2',
    abi: poolAbi,
  },
  xsdAvalanchePool: {
    address: '0x1ff77D8e8e011bCF505cd4C6C110b53969FB5E84',
    abi: poolAbi,
  },
  xsdFantomPool: {
    address: '0xaB1c27a3B78d9afCDe9963780af4Ff48D6b816A2',
    abi: poolAbi,
  },
  bankxBnbPool: {
    address: '0xfa0870077A65dBFde9052ad16B04C3e1A885CE2d',
    abi: poolAbi,
  },
  bankxEthPool: {
    address: '0x2147F5c02c2869E8C2d8F86471d3d7500355d698',
    abi: poolAbi,
  },
  bankxArbitrumPool: {
    address: '0x1ff77D8e8e011bCF505cd4C6C110b53969FB5E84',
    abi: poolAbi,
  },
  bankxPolygonPool: {
    address: '0x59cA927Ae4c900dC8091515191E39B010bec1118',
    abi: poolAbi,
  },
  bankxOptimismPool: {
    address: '0x1ff77D8e8e011bCF505cd4C6C110b53969FB5E84',
    abi: poolAbi,
  },
  bankxAvalanchePool: {
    address: '0x53f51fcDf06946AafE25F14d2f1C9B66E71Ca683',
    abi: poolAbi,
  },
  bankxFantomPool: {
    address: '0x53f51fcDf06946AafE25F14d2f1C9B66E71Ca683',
    abi: poolAbi,
  },
  xsdBsc: {
    address: '0x39400E67820c88A9D67F4F9c1fbf86f3D688e9F6',
    abi: xsdAbi,
  },
  xsdEth: {
    address: '0x75Cae30025A514b7AE069917E132Cc99762A0e16',
    abi: xsdAbi,
  },
  xsdArbitrum: {
    address: '0xA3034EF5f9D98f4dAC6Fc44421642c2616d9E346',
    abi: xsdAbi,
  },
  xsdPolygon: {
    address: '0xAbAc1C04408Cb6509BC9340e6b033c17F161Ef9e',
    abi: xsdAbi,
  },
  xsdOptimism: {
    address: '0x53f51fcDf06946AafE25F14d2f1C9B66E71Ca683',
    abi: xsdAbi,
  },
  xsdAvalanche: {
    address: '0x93Abe713002526D4cE708f890139f19313012f95',
    abi: xsdAbi,
  },
  xsdFantom: {
    address: '0x93Abe713002526D4cE708f890139f19313012f95',
    abi: xsdAbi,
  },
} as const;
