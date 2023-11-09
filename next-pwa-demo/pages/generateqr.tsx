import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ethers } from 'ethers';
import CryptoJS from 'crypto-js';



const GenerateQr = () => {
  const [data, setData] = useState('No result');
  // Specify the type of blockNumber to be either number or null or string
  const { ethers, JsonRpcProvider } = require('ethers');
  const [blockNumber, setBlockNumber] = useState<number | null | string>(null);
  const [hash, setHash] = useState('');

  const venue_id = '13333337'; // replace with your actual venue_id
  const secret = '4c%&U)af*'; // replace with your actual secret salt

  useEffect(() => {
    const fetchBlockNumber = async () => {
      const provider = new JsonRpcProvider('https://mainnet.infura.io/v3/89cd5ed04e0a4daba4c666da1a9c8193');
      try {
        const currentBlockNumber = await provider.getBlockNumber();
        setBlockNumber(currentBlockNumber);

        // Generate the hash when the block number is fetched
        const toHash = `${currentBlockNumber}-${venue_id}-${secret}`;
        const hashedValue = CryptoJS.SHA256(toHash).toString(CryptoJS.enc.Hex);
        setHash(hashedValue);

      } catch (error) {
        console.error('Error fetching block number:', error);
        // Now you can set blockNumber to a string without type errors
        setBlockNumber('Error fetching block number');
      }
    };

    fetchBlockNumber();
  }, [venue_id, secret]); // Dependencies array ensures useEffect is called when these values change


  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      {/* Content for your QR page */}
      <div>
        <h1>My QR Generator</h1>
        {/* Display the current block number */}
        <p>Current Block Number: {blockNumber !== null ? blockNumber : 'Loading...'}</p>
        <p>Venue ID: {venue_id}</p>
        <p>Secret: {secret}</p>
        <p>Concanted: </p>
        <p>Hash of all three: {hash}</p>
      </div>

      {/* Sign In and Sign Up buttons */}
      <div className="space-y-4">
        <Link href="/" passHref>
          <button className="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back Home from QR Reader
          </button>
        </Link>
      </div>

      {/* Other content and return button if needed */}
    </div>
  );
};

export default GenerateQr;
