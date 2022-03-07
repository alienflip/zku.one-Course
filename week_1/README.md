### [circom-dir](https://github.com/alienflip/zku/tree/main/week_1/circom-dir)

> question 1 

### [nft-collectible-frontend](https://github.com/alienflip/zku/tree/main/week_1/nft-collectible-frontend)

> question 2

### Understanding and generating ideas about ZK tech

> question 3

1. The main difference between snarks and starks is the requirement for a trusted setup-of which there is none in starks. Furthermore, the main circuit languages are different: snarks->circom, starks->cairo. starks are quantum secure.
2. how plonk trusted setup improves on groth16: -vitalik, `How we can Better Understand PLONK`
```
The first improvement is that while PLONK still requires a trusted setup procedure similar to that needed for the SNARKs in Zcash, it is a "universal and updateable" trusted setup. This means two things: first, instead of there being one separate trusted setup for every program you want to prove things about, there is one single trusted setup for the whole scheme after which you can use the scheme with any program (up to some maximum size chosen when making the setup).

Second, there is a way for multiple parties to participate in the trusted setup such that it is secure as long as any one of them is honest, and this multi-party procedure is fully sequential: first one person participates, then the second, then the third... The full set of participants does not even need to be known ahead of time; new participants could just add themselves to the end. This makes it easy for the trusted setup to have a large number of participants, making it quite safe in practice. 
```

3. The main thing here is identity. We can use NFTs as identiy cards, and use zkp to hide identity data.
4. We use the above idea, and then allow people to communicate in DAOs without doxxing their identity.
