
<h1 align="center">
  degenDeploy
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/node-v0.8.12-orange"></img>
  <img src="https://img.shields.io/badge/solidity-v0.8.12-orange"></img>
  <img src="https://img.shields.io/badge/circom-v0.8.12-orange"></img>
  <img src="https://img.shields.io/badge/rust-v0.8.12-orange"></img>
  <img src="https://img.shields.io/badge/truffle-v0.8.12-orange"></img>
</p>

<p align="center">🍄 In this app, we deploy a contract as an anon to the harmony testnet, using zero knowledge proofs 🍄</p>

> Protocol 
> > The application will create a burner account, and then use a zero-knowledge mixer in order to deploy a contract anonymously by funding the new wallet with funds, using the mixer.

------------

## Installation

```
cd contract-deployment-app
npm i
```

------------

## Use

```
cd contract-deployment-app
```

> add your contract to the `contracts` folder

> add your public wallet details to the `.env`
 
```
chmod 700 exec.sh
./exec.sh
```

> now your contract is deployed, and you have a new wallet aswell, whose details are in `newWallet.txt`

------------
