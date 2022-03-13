> went a bit off-pieced here ... realised I needed to learn typescript to do the assignment! So will re-hash an earlier assignment, but in typescript

# deploy contract

### install hardhat

```
cd hardhat
npm i
```

### secret key

> copy your private key into `.env`, make sure it is a harmony funded address

```
touch .env
source .env
```

### deploy 

> here we deploy the verifier from week 1 to harmony testnet

```
npx hardhat run scripts/deploy.js --network harmony
```

# interact with contract

### install deps

```
cd interactTS
npm i
```

### secret key

> copy your private key into `.env`, make sure it is a harmony funded address

```
touch .env
source .env
```

### verify proof

```
npx ts-node veriftProof.ts
```
