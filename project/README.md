
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

> optionally deploy your own contract here

```
cd deployer
npm i
cd app/deployer
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
