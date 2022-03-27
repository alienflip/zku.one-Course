## Which stream?

0. I will choose stream B.

## Scaling the future

1. Based on the above, a number of solutions have been proposed to solve this trilemma. Briefly describe the different scalability solutions and write pros and cons of each approach. What was the biggest problem with the Plasma approach?

```
Solution: sharding
This is the process of splitting infrastructure into smaller pieces in an attempt to scale a network.

pros:
Sharding could make running full nodes easier.

Cons:
Piece one needs to be able to know the data coming from the other five nodes is correct. Otherwise it could be tricked into thinking a change was made that didn't really occur.
```
```
Solution: rollups
A rollup is a type of scaling solution that works by executing transactions outside of Layer 1 but posting transaction data on Layer 1. This allows the rollup to scale the network and still derive its security from the Ethereum consensus. 

pros:
They will also enable a new breed of applications that require cheaper transactions and faster confirmation time. All of this while being fully secured by the Ethereum consensus. 

Cons:
Composability is one of them. In order to compose a transaction that uses multiple protocols, all of them would have to be deployed on the same rollup. Another challenge is fractured liquidity. Lower liquidity usually means higher slippage and worse trade execution. 
```
```
Solution: sidechains
A sidechain is a separate blockchain which runs in parallel to Mainnet and operates independently. It has its own consensus algorithm (e.g. proof-of-authority, Delegated proof-of-stake, Byzantine fault tolerance). It is connected to Mainnet by a two-way bridge.

pros:
Supports general computation, EVM compatibility. Established technology.

Cons:
Less decentralized. Uses a separate consensus mechanism. Not secured by layer 1 (so technically it’s not layer 2).
```

```
plasma: 
A plasma chain is a separate blockchain that is anchored to the main Ethereum chain, and uses fraud proofs (like optimistic rollups) to arbitrate disputes.

challenges:
Does not support general computation. Only basic token transfers, swaps, and a few other transaction types are supported via predicate logic. 
Withdrawals are delayed by several days to allow for challenges. For fungible assets this can be mitigated by liquidity providers, but there is an associated capital cost. 
Relies on one or more operators to store data and serve it upon request.
```

2. One of the solutions that has been gaining a lot of traction lately is zkRollups. With the use of a diagram explain the key features of zkRollups. Argue for or against this solution highlighting its benefits or shortcomings with respect to other solutions proposed or in use.

[zkr article](https://medium.com/fcats-blockchain-incubator/how-zk-rollups-work-8ac4d7155b0e)

![zkRollups](https://github.com/alienflip/zku/blob/main/week_4/Hash_Tree.svg.png)

![rollupTransition](https://github.com/alienflip/zku/blob/main/week_4/transitionrollups.png)

```
How does a zkRollup work? 

A snark checks the following

The transaction is correct and corresponds to the depositor’s public key.
The depositor’s account exists in the balance tree.
The amount being transferred is not greater than the depositor’s balance.
The receiver account exists in the balance tree.
Both the sender account and receiver account are of the same token type.
The sender’s nonce is correct.
There are no overflows / underflows etc.

Once it checks out, it’s added to the queue. Once a number of transactions are in the queue, the coordinator will decide to create a batch. 
To do this, the coordinator compiles a bunch of inputs for the zk-proof circuit to compile into a proof. This involves:

Creating a merkle tree of all the transactions in the batch, which is padded with dummy transactions up to the size required by the circuit, and each with a merkle proof.
Creating a collection of merkle proofs for each sender and receiver from all transactions in order to prove account existence.
Creating a collection of intermediate roots which are derived from updating the balance tree root after updating the sender and receiver accounts in each transaction.
```

```
pros:
So, what are ZK-Rollups doing that is so valuable? Basically, they allow for quicker and cheaper transactions. They can scale the Ethereum network as a result of being able to process hundreds of transfers off-chain, rolling them up into one transaction and then sending a validity proof known as a SNARK back to the main chain as authentication. Instantly verifiable, SNARKS can dramatically reduce transaction fees, while significantly improving throughput and scalability.

cons:
Trusted setup.
How difficult it will be to run a coordinator node, and the effects this has on decentralization.
```

3. Ethereum is a state machine that moves forward with each new block. At any instance, it provides a complete state of Ethereum consisting of the data related to all accounts and smart contracts running on the EVM. The state of Ethereum modifies whenever a transaction is added to the block by changing the balances of accounts. Based on the massive adoption of Ethereum across the globe, this state has become a bottleneck for validators trying to sync with the network as well as validate transactions. Briefly describe the concept of stateless client, and how they help resolve this issue? Explain how Zero-Knowledge improves on the concept of stateless client?

```
Well, the stateless client is nothing but a concept that enables nodes to validate a block without storing the Ethereum state. 

Mining new blocks will be moved from proof of work (PoW) to proof of stake (PoS). A user can become a miner by staking a minimum amount of Ethereum live on the blockchain. This allows a miner to vote on the next block to create. Consensus comes very quickly, within one block of the evaluated block, because lengthy hash cryptography is no longer used to create blocks. This greatly reduces electricity requirements, therefore cost of running a node. Additionally, the held stake is an economic incentive / punishement for any miner that performs nefarious activity.

This is exactly analogous to zkp: proving a state without revealing the state of the blockchain. In our case, not revealing means not storing.
```


## Roll the TX up

3. ZKSync 2.0 was recently launched to testnet and has introduced ZKPorter. Argue for or against ZKPorter, highlighting the advantages or shortcomings in this new protocol.

```
What does zkPorter solve? Well, it allows for large scale network scalability on an exponential scale, and also allows for composability of applications and protocols.
```

```
zkPorter separates the concerns of state validity and data availability. State validity — that the transition from one state to the next is always valid — is uniformly enforced by means of zero-knowledge proofs, which offer exponential scalability while inheriting the security guarantees of the underlying L1. In contrast, data availability is delegated to individual shards, which are free to experiment with different solutions. In necessariis unitas, in dubiis libertas!
```

```
On the other hand, zk-based scaling cannot directly solve is the data availability problem: if the state data becomes unavailable, funds are frozen. zkRollup and Validium handle the data availability problem in different ways.
```

```
At some point, somone will make the descision to abstract out of zkPorter's shard 0, at which point, they take security, cost and throughput into their own hands.
```

## Recursive SNARK’s

1. Why would someone use recursive SNARK’s? What issues does it solve? Are there any security drawbacks?

```
There are a number of use cases for recursive composition. One of the most well-known at the moment is that of Coda, a fully-succinct blockchain protocol allowing clients to validate the entire chain by checking a small cryptographic proof in the tens of kilobytes. Recursive proofs have also been proposed for other blockchain scaling solutions, such as recursively proving validity of Bitcoin’s proof of work consensus algorithm, and at Celo using bounded recursion to efficiently verify aggregated signatures for mobile clients.
```

2. What is Kimchi and how does it improve PLONK?

```
In Mina, zkApps (zero-knowledge smart contracts) can be written in typescript using the snarkyjs library, and then compiled down to some intermediary representation with snarky. A Kimchi compiler can then be used to compile the program into the prover and verifier indexes, and both sides can use Kimchi provided functionalities to produce proofs as well as verify them. The verifier index is uploaded on chain, which allows anyone to verify proofs contained in transactions that claim that they executed a zkApp correctly.

Kimchi is a collection of improvements, optimizations, and alterations made on top of PLONK. For example, it overcomes the trusted setup limitation of PLONK by using a bulletproof-style polynomial commitment inside of the protocol. This way, there is no need to trust that the participants of the trusted setup were honest (if they were not, they could break the protocol)
```

## Final Project Ideas

1. Describe 2-3 different, independent ideas for your final project. For each, describe the idea in about 150 words, explaining which aspect of ZK you are capitalizing on (privacy, succinctness, or fairness), and why this may be a timely product for the market. See the advice below for guidance and inspiration.

```
Project 0: AnonDeploy. In this zk privacy project, the developer can deploy a contract anonymously through a burner wallet and mixer. Privacy is important for DAO members, adn the DAOs deployer should also be able to be anonymous.
```
```
Project 1: MMORPG zero knowledge random drop system. In this system, the dungeon boss drops an item with a random VDF function calculating the probability, and then the winner of the item is also picked with a VDF. All of the raid are given an item with a mixer, winners of the best gear is kept secret with a zkp. 
Why is this cool? Well, no need for jealousy in guilds anymore. Everyone is equally ignorant. :).
```

2. Compare the pros and cons of the ideas, and try to make a strong case for each project. Describe some shortcomings including feasibility given the time frame and existence of competing products, as well as how you may be able to address these shortcomings.

```
Project 0 pros: can be made quickly and with a fork of tornado cash so the audit will be small and cheap. cons: it is not super innovative. Cons addressed by potentially creating an awesome frontend.
```
```
Project 1: pros: innovative and exciting! cons: large project with many aspects required to link into it, so large audit. Cons addressed by commmiting much time to the project.
```

## Thinking in ZK

1. If you have a chance to meet with the people who built ZKSync and Mina, what questions would you ask them about their protocols?

```
zkSync: What do you guys think about worst case scenario of what your technology will enable?

Mina: How the heck did you guys come up with such a nice protocol?! And will the be a mobile friendly version?
```
