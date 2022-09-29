# Software Development Project (Hochschule Fulda)

## **Group Members:**

| First Name   | Last Name    | Matriculation No. | Email        | Role         |
| ------------ | ------------ | ----------------- | ------------ | ------------ |
| Muhammad     | Sohaib       | 1417472           | muhammad.sohaib@informatik.hs-fulda.de      | Team Lead    |
| Deepak | Heman Das |   1414244    |  deepak.heman-das@informatik.hs-fulda.de  | Group Member |
| Sagar | Dhaware | 1413164      | sagar.dhaware04@gmail.com | Group Member |
| Daniyal  |  Inayatullah | 1415618   | daniyal.inayatullah@informatik.hs-fulda.de | Group Member |

# Conix Pass (CNX)

![alt text](https://i.ibb.co/tmKVG0f/conix-pass.png)

Conix Pass is a token which resides on Etherum block chain. It is built and deployed on ETH blockchain using solidity based smart contract.

## **Solidity Smart Contract**

The Conix pass contract is developed in Solidity. The smart contract is based on `ERC-721-A` standard. it is used because ERC-721-A take less
Gas fee for each transaction as compared to traditional standards.

You can locate smart contract under this directory **`smart-contract/contracts/Conix.sol`**

## **Conix.sol Description**

Smart contract is using two external helper libraries to make smart contract more efficient and secure. We have used **erc21a** and **open zeppelin**.
Smart contract consist of functions which can be used from both our DAPP and smart contract Etherscan(ETH Blockchain Browser).
The contract consist of functions like **mint** which a user can use directly from Etherscan or our DAPP to buy Conix token.

Our application deploys smart contract directly from CLI using **Truffle (Dashboard to interact with blockchain)** as a medium. We can update smart contract
settings by just updating configurations in a file which you can locate in **`smart-contract/config/CollectionConfig.ts`**. Contract on ethereum blockchain is not verified after deployment but we can verify it from our CLI by just running a command. We get our smart contract address returned after deploying it.

`yarn deploy --network truffle`

To verify we can use command,

`yarn verify (Contract Address) --network truffle`

Below attached is the working image of **Truffle Dashboard**,

![alt text](https://i.ibb.co/GsGp801/truffle.png)

As you can see in the image that our contract is on `rinkeby.etherscan.io` (Test network of Etherscan). Our smart contract address is `0x44E010d3C81603d9Be27EF18B78B544ac13C1B25` and you can just search it on `rinkeby.etherscan.io`.

![alt text](https://i.ibb.co/KWyx79h/conix-contract.png)

You can read code as well as go through some of the functions which our smart contract offers to the user. You can find it by clicking on **Contract** tab with a green tick on it.

![alt text](https://i.ibb.co/HKNPK03/read-code.png)

## **Decentralized Application (DApp)**

DApp is built as a Hardhat project with TypeScript support for a better development experience. Our DApp interacts with our `smart-contract` app to get the latest updates from blockchain
which in the end is refelcted on the frontend. In order to interact with our DApp user needs to have a **`MetaMask`** wallet or other preffered wallet with **rinkeby** test network added in
the wallet with some test **ethereum**. You can get test ethereum from **[Faucet](https://rinkebyfaucet.com/)**.

![alt text](https://i.ibb.co/NpvpZYz/dapp.png)

User needs to install metamask wallet browser extension, create account and buy some ETH in order to buy our token. Currently it is on testnetwork so Rinkeby ETH is enough which you can get from **[Faucet](https://rinkebyfaucet.com/)**.

![alt text](https://i.ibb.co/fNDTp74/metamask.png)

DApp allows user to connect wallet and buy our token. After user buy our token DApp instantly reflect changes, incrementing number of token in the total supply of tokens. If we have paused the buying process of our token no one will be able to make any kind of transaction both from our DApp or directly from smart contract on etherscan.

This how DApp looks like when smart contract is paused.

![alt text](https://i.ibb.co/r40tnsv/dapp-closed.png)

## Main features

- extremely high gas efficiency (users are going to pay lower gas fees compared to traditional tokens)
- whitelist support with customizable list size (using a Merkle Tree for verification)
- simple CLI commands that can help through all the sale steps (whitelist, pre-sale, public sale)
- full support for contract interaction through block explorers (e.g. Etherscan)

## Requirements

### Software

- [Visual Studio Code](https://code.visualstudio.com/) (with the [Solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity) extension)
- [NodeJs](https://nodejs.org/) (with the [Yarn package manager](https://yarnpkg.com/getting-started/install))

### Services

- Etherscan API key _(Used for the automated contract verificiation, as well as retrieving the current values for gas cost estimation)_
- Truffle Dashboard to perform operations on real blockchain.



<center><sub><sup>A university project by students of Hochschule Fulda </sup></sub></center>