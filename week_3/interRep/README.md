1. How does InterRep use Semaphore in their implementation? Explain why InterRep still needs a centralized server.

```
Interep provides special groups that can be used by DApps or services to verify users' reputations without exposing their identities. In order to join groups each user must create a unique identifier using an Ethereum account and Semaphore. Semaphore, then, allows users to prove that their identifier is part of a specific group. Their approach sacrifices some decentralization to gain more privacy.
```

2. Clone the InterRep repos: contracts and reputation-service. Follow the instructions on the Github repos to start the development environment. Try to join one of the groups, and then leave the group. Explain what happens to the Merkle Tree in the MongoDB instance when you decide to leave a group. 

[contracts deployed to ropsten](https://github.com/alienflip/zku/blob/main/week_3/interRep/contracts/contracts.json)

```
When you leave a group, the database prunes the corresponding leaf from the merkle tree which it stores your commitment on.
```

[leave group](https://github.com/alienflip/zku/blob/main/week_3/interRep/reputation-service/src/core/groups/mts/deleteLeaf.ts)

