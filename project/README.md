
<h1 align="center">
  degenDeploy
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/node-v16.14.0-orange"></img>
  <img src="https://img.shields.io/badge/npm-v8.3.1-pink"></img>
  <img src="https://img.shields.io/badge/circom-v2.0.3-blue"></img>
  <img src="https://img.shields.io/badge/rust-v1.59.0-green"></img>
</p>

<p align="center">🍄 In this app, we deploy a contract as an anon to the harmony testnet, using zero knowledge proofs 🍄</p>

> Protocol 
> > The application will create a burner account, and then use a zero-knowledge mixer in order to fund the burner wallet, then deploy your contract anonymously with the new wallet

------------

## Install and Use

> put contracts in the `contracts` folder

> add public wallet private key to the `.env_pub`
> > note : public wallet must be funded with testnet ONE

### install

```
cd app
npm i
```

### use 

```
npx hardhat run scripts/anonDeploy.js --network harmony
```
> burner private key is deployed to `.env_private`
> 
> contract is deployed to `addressContract.txt`

------------

> note: `tornado-core` implimentation cloned from https://github.com/webb-tools/tornado-core
