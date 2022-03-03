# merkle root circom

> merkle_root.circom

![code](https://github.com/alienflip/zku/blob/main/week_1/Screenshot%20(29).png)

### compiling, and executing powers of tau ceremony

> [./exec.sh](https://github.com/alienflip/zku/blob/main/week_1/exec.sh)

![tau1](https://github.com/alienflip/zku/blob/main/week_1/Screenshot%20(34).png)

### Errors

> remember to assign `k` in `MiMCsponge`!

### Do we need this for a simple calculation of a merkle root?

> No. However, the technology allows for reduction of the amount of gas necessary to check if an item is in the merkle tree, by bundling of data. Technologies using this include blockchain such as VEGA

> [public.json](https://github.com/alienflip/zku/blob/main/week_1/public.json)

# Minting an NFT and committing the mint data to a Merkle Tree

> Using merkleTreeContract.sol,  treeHeignt : 4 layers

> > transaction 1: gas : 239094

> > transaction 2: gas : 157392

![merkleTree](https://github.com/alienflip/zku/blob/main/week_1/Screenshot%20(35).png)

> > merkleTreeContract.sol : 

> FE application : /nft-collectible-frontend