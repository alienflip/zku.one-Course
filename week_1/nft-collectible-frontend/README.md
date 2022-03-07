# Minting an NFT and committing the mint data to a [Merkle Tree Contract](https://github.com/alienflip/zku/blob/main/week_1/nft-collectible-frontend/merkleTreeContract.sol)

> Using merkleTreeContract.sol,  treeHeignt : 4 layers
> > transaction 1: gas : 225790

> > transaction 2: gas : 238444

![merkleTree](https://github.com/alienflip/zku/blob/main/week_1/nft-collectible-frontend/Screenshot%20(37).png)

> FE application : /nft-collectible-frontend
> > merkleTreeContract.sol : https://rinkeby.etherscan.io/tx/0x9e919036f74b06f27aa07bb527bda6de7af4dab6876181c99ac0dfb541e97be3

> follow `https://dev.to/rounakbanik/building-a-web3-frontend-with-react-340c`
> > add the deployed contract address to [App.js](https://github.com/alienflip/zku/blob/main/week_1/nft-collectible-frontend/src/App.js)

> use fe app
```
npm run start
```

> open browser console
> > Mint some NFT's with `mint nft!`, then click `get mint tree!` to see the tree aray

> copy/paste json from browser console into a `input_.json`
> > execute a snark on `input_.json` to produce a new `proof.json`
> > validate proof with solidity contract
> > > not yet implimented
