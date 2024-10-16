import { createPublicClient, fallback, http } from 'viem';
import {
  mainnet,
  bsc,
  arbitrum,
  polygon,
  optimism,
  avalanche,
  fantom,
} from 'viem/chains';
import { NODE_ENDPOINT } from '../utils/env-vars.js';

const chainStack = http(NODE_ENDPOINT);
const ankrBsc = http('https://rpc.ankr.com/bsc');
const ankrEth = http('https://rpc.ankr.com/eth');
const ankrArbitrum = http('https://rpc.ankr.com/arbitrum');
const ankrPolygon = http('https://rpc.ankr.com/polygon');
const ankrOptimism = http('https://rpc.ankr.com/optimism');
const ankrAvalanche = http('https://rpc.ankr.com/avalanche');
const ankrFantom = http('https://rpc.ankr.com/fantom');
const ethDefault = http('https://cloudflare-eth.com');

export const ethClient = createPublicClient({
  chain: mainnet,
  transport: fallback([ethDefault, ankrEth]),
});

export const bscClient = createPublicClient({
  chain: bsc,
  transport: fallback([chainStack, ankrBsc]),
});

export const arbitrumClient = createPublicClient({
  chain: arbitrum,
  transport: fallback([http(), ankrArbitrum]),
});

export const polygonClient = createPublicClient({
  chain: polygon,
  transport: fallback([http(), ankrPolygon]),
});

export const optimismClient = createPublicClient({
  chain: optimism,
  transport: fallback([http(), ankrOptimism]),
});

export const avalancheClient = createPublicClient({
  chain: avalanche,
  transport: fallback([http(), ankrAvalanche]),
});

export const fantomClient = createPublicClient({
  chain: fantom,
  transport: fallback([http(), ankrFantom]),
});
