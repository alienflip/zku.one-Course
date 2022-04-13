1. Celestia is set out to be the consensus and data availability layer for blockchains. Chains built on top of Celestia can concentrate on execution. Do you think data availability is the true bottleneck to scale blockchain? Argue for and against the need for the data availability layer for blockchain.

```
“Data availability” and the “data availability problem” are terms used to refer to a specific problem faced in various blockchain scaling strategies. 
This problem asks: how can nodes be sure that when a new block is produced, all of the data in that block was actually published to the network? 
The dilemma is that if a block producer doesn’t release all of the data in a block, no one could detect if there is a malicious transaction hidden within that block.

Large block sizes: But what if we wanted to increase the block size limit? Less people will afford to run full nodes and independently verify the chain, and more people will run light clients that are less secure. 
This is bad for decentralization, because it would be easier for block producers to change the protocol rules and insert invalid transactions that light clients will accept as valid.

Sharding: In order to solve the problem of detecting if any shard accepted an invalid transaction, you need to be able to guarantee that all the data in that shard was published and made available, so that any invalid transaction can be proven with a fraud proof.

These could be solved with Data availability proofs.

My opinion is that any innovation is useful in some context, and that no technology is the "true" winner.
```

2. Another popular zero knowledge technology in the market today is zk-STARKs. Starkware uses this technology to power dApps such as DiversiFi, ImmutableX, dYdX, etc.. List some advantages of zk-Starks over zk-Snarks. In your opinion, which one is better and why?

```
From my understanding, the main difference is the setup: one has a trusted element, the other a trustless. However, this is a repeated question! See below.
```

[starks vs snarks](https://github.com/alienflip/zku/tree/main/week_1)

```
My opinion is that there must be a trade-off somewhere, and that I would like to have more hands on experience with starks before making this call.
```

3. Write in brief ( 1- 2 line for each) about the polygon’s product stack. Refer this Polygons ZK Product Overview

![pps](https://github.com/alienflip/zku/blob/main/week_7/94144218c474f5a22351eab729e40f250e2a5f48-1289x726.webp)

```
Outline: STARKS not SNARKS (Miden), Privacy for Enterprises (Nightfall), Data Availability (Avail), Tooling (Edge), Recursive zk (Zero), Decentralized and active (hermez)
```

4. Write in brief (at least 4 -5 lines) about your learnings throughout the course.

```
Before the course, I had a cursory understanding of why a zkp is useful. It is now significantly better. 
What is also nice is that I know where the gaps in my knowledge are with zkps. 
This is potentially even more valuable that what I learned during the course. 
```

5. Please provide an update on what you have achieved on your final project and what you plan on doing next.

[Final Project](https://github.com/alienflip/degenDeploy)

```
So milestone 1 is done: launching on harmony testnet with a feature complete product. 
Milestone 2 will be skipped, as this app has no need for a DAO (although I will make another proposal soon for a product with such a need!), so next on the list is main-net lauch. 
The DoD for this is simple: attempt to use the tool on an existing mixer, and prove it works (which, in fact, is ironic, since proof it works breaks the tool!).
```
