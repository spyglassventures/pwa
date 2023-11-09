// utils/getCurrentBlock.js
import { ethers } from 'ethers';

export async function getCurrentBlock() {
  // This example uses the default provider; you might want to use a specific one
  const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

  try {
    const blockNumber = await provider.getBlockNumber();
    return blockNumber;
  } catch (error) {
    console.error('Error fetching block number:', error);
    return null;
  }
}
