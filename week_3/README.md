### [Dark Forest](https://github.com/alienflip/zku/tree/main/week_3/darkForest)

> question 1

### [Fairness in card games](https://github.com/alienflip/zku/tree/main/week_3/fairness)

> question 2

### MACI and VDF

> question 3

1. What problems in voting does MACI not solve? What are some potential solutions?
```
MACI does not solve the problem of network takeover. If a single person wants to impliment a 51% attack, they can still generate enough nodes to take over a network and flood it with many votes that they know are biased to one descision. A quick solution to this is, unfortunately, KYC. In the long-term, it is a problem that could be solved with proof of identity: one-person-one-vote.
```

2. How can a pseudorandom dice roll be simulated using just Solidity?

[random contract](https://github.com/alienflip/zku/blob/main/week_3/randomDice.sol)

```
With only solidity, the pseudo-random-dice roll can take a users random input, make sure it is a large number, and then hash it with the current block hash with keccack256 to find a pseudo random hash.
```

2.1. What are the issues with this approach?

```

```

2.2. How would you design a multi party system that performs a dice roll?

[multi-party random contract](https://github.com/alienflip/zku/blob/main/week_3/randomMultiDice.sol)

```
Here, we instantiate a group of people as members allowed to add a random number, then we take all their random numbers, and hash them together with the block hash, and then use keccack256 on the output.
```

2.3. Compare both techniques and explain which one is fairer and why.
```
```

2.4. Show how the multi party system is still vulnerable to manipulation by malicious parties and then elaborate on the use of VDF’s in solving this.
```
```

3.
```
```

### [InterRep](https://github.com/alienflip/zku/tree/main/week_3/interRep)

> question 4

### Thinking In ZK

> question 5

1. If you have a chance to meet with the people who built DarkForest and InterRep, what questions would you ask them about their protocols?
```
```

