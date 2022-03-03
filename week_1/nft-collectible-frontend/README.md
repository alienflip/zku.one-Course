# Minting an NFT and committing the mint data to a [Merkle Tree Contract](https://github.com/alienflip/zku/blob/main/week_1/nft-collectible-frontend/merkleTreeContract.sol)

> Using merkleTreeContract.sol,  treeHeignt : 4 layers
> > transaction 1: gas : 225790

> > transaction 2: gas : 238444

![merkleTree](https://github.com/alienflip/zku/blob/main/week_1/nft-collectible-frontend/Screenshot%20(37).png)

> FE application : /nft-collectible-frontend
> > merkleTreeContract.sol : https://rinkeby.etherscan.io/tx/0x34bcc1dd7c484fe26f9fe7c432369f9f6886154c180e959b5efa2893db787d1d

> follow `https://dev.to/rounakbanik/building-a-web3-frontend-with-react-340c`
> > add the deployed contract address to App.js

> use fe app
```
npm run start
```

> open browser console
> > Mint some NFT's with `mint nft!`, then click `get mint tree!` to save the tree

> copy/paste json from browser console into `input.json` in `/circom-dir`
> > execute a snark to produce `proof.json`
> > validate proof with solidity contract
