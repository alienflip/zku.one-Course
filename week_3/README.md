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
This approach is super weak! Somone could man-in-the-middle the input number and then "predict" the outcom 100%.
```

2.2. How would you design a multi party system that performs a dice roll?

[multi-party random contract](https://github.com/alienflip/zku/blob/main/week_3/randomMultiDice.sol)

```
Here, we instantiate a group of people as members allowed to add a random number, then we take all their random numbers, and hash them together with the block hash, and then use keccack256 on the output.
```

2.3. Compare both techniques and explain which one is fairer and why.
```
The first approach is far less fair, as the randomness is entrusted to a single persons "input" data, rather than a groups input.
```

2.4. Show how the multi party system is still vulnerable to manipulation by malicious parties and then elaborate on the use of VDF’s in solving this.
```
The multi-party system here can be manipulated if all the members of the generation group all collude at once.
```
```
A verifiable delay function (VDF) is a function whose evaluation requires running a given number of sequential steps, yet the result can be efficiently verified. It works like this: 
```
```
Random Value: s = c^((p+1)/4) mod p
```
```
Verify Randomness: c = s^2
```
```
Compute the modular square root is pretty simple but sequential and the running time is logarithmically bigger a p grows. 
From the other end the verification is immediate. All this comes with a caveat: it turns out that the computation phase is actually parallelizable.
```
```
VDF  stands for Verifiable Delay Function and is (as the name says) a Function that:
Takes T steps to evaluate even with unbounded parallelism
The output can be verified efficiently
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

