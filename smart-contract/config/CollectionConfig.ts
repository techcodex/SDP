import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumLegacyTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Conix',
  tokenName: 'Conix Pass',
  tokenSymbol: 'CNX',
  hiddenMetadataUri: 'ipfs://QmSaX1oAwZprjbnqWWYfLLvN73WWayvGVyfzoiRbvXxneL/hidden.json',
  maxSupply: 50,
  whitelistSale: {
    price: 0.005,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.007,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.01,
    maxMintAmountPerTx: 3,
  },
  contractAddress: "0x44E010d3C81603d9Be27EF18B78B544ac13C1B25",
  marketplaceIdentifier: 'conix-pass',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
