
# set - get solidity

> simple.sol

![zero](https://github.com/alienflip/zku/blob/main/week_0/Screenshot%20(16).png)

# improve perf solidity

>> contructor args `["0x666f6f0000000000000000000000000000000000000000000000000000000000","0x6261720000000000000000000000000000000000000000000000000000000000"]`

### before

> BallotPre.sol
> for all 10 transactions 
>> gasPerTransaction : 48657 

>> Total: 486570

![k](https://github.com/alienflip/zku/blob/main/week_0/Screenshot%20(26).png)

### after

> BallotPost.sol
> for all 10 transactions 
>> gasPerTransaction : 46405 

>> Total: 464050

![k](https://github.com/alienflip/zku/blob/main/week_0/Screenshot%20(24).png)

### 2nd optimisation

> BallotPostPost.sol
> for all 10 transactions 
>> Total: 257120

![k](https://github.com/alienflip/zku/blob/main/week_0/Web%20capture_24-2-2022_17730_remix.ethereum.org.jpeg)

