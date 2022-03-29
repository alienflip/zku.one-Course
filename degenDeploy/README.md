
<h1 align="center">
  degenDeploy
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/node-v16.14.0-orange"></img>
  <img src="https://img.shields.io/badge/npm-v8.3.1-green"></img>
</p>

<p align="center">🍄 In this app, we deploy a contract as an anon to the harmony testnet, using zero knowledge proofs 🍄</p>

<p align="center">🍄 This tool will do it all for you, except the physical IP handling. For that you will need a burner computer and an internet cafe. 🍄</p>

> Protocol 
> > The application will create a burner account, and then use a zero-knowledge mixer in order to fund the burner wallet, then deploy your contract anonymously with the new wallet

------------

## Install and Use

> put contracts in the `deployer/contracts` folder

> add public wallet private key to the `app/.env.example`, then do

```
cp .env.example .env
```

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

> burner private key is copied to `/deployer/.env_private`
> 
> the new burner is then funded
>
> contract is deployed to `/deployer/addressContract.txt`

------------

> note: `tornado-core` implimentation cloned from https://github.com/webb-tools/tornado-core

> deployed at harmony shard 1
```
{
    Hasher: 0x96B8Bff1fE9a9c0656b84d7bd1013faD2435Edc0
    Verifier: 0xca2c45fe334fBb9d9356AaB291842b964DB9B0E3
    NativeAnchor: 0x8a4D675dcC71A7387a3C4f27d7D78834369b9542
}
```
