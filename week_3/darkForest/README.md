1. Write a Circom circuit that verifies this move. The coordinates of A, B, and C are private inputs. You may need to use basic geometry to ascertain that the move lies on a triangle. Also, verify that the move distances (A → B and B → C) are within the energy bounds. 

[Move circuit](https://github.com/alienflip/zku/blob/main/week_3/darkForest/Move.circom)

```
Here I have included the original dark-forest circuits for reference purposes
```

2. Make a Solidity contract and a verifier that accepts a snark proof and updates the location state of players stored in the contract. 

