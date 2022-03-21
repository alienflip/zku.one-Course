<h1 align="center">Tornado Core</h1>

<p align="center">
  <strong>Tornado Core Functionality 🌪️</strong>
  <br />
  <sub>Mixers (Anchors) for the EVM</sub>
</p>

<br />

## Build 👷

The repo has been setup with the proving and verifier keys generated from tornado cash's trusted setup ceremony.

1. Install the necessary packages with `npm i`
2. Build the artifacts with `truffle compile`

#### Build your own proving and verifying keys

If one desires, they can run these commands to build the circuit and get tests to work with their own keys:

1. `npm run build:circuit`
2. `cp build/circuits/Verifier.sol contracts/Verifier.sol`
3. `truffle compile`
  - follow the compiler on upgrade Verifier.sol to solidity 0.7.6:
    - pragma solidity 0.5.0 => 0.7.6
    - Find and replace "sub(gas" with "sub(gas()"
    - Find and replace "@return" with "return"

#### Verify the build:

1. `cd scripts`
2. `node verifySnark.js`

If the script returns 'true', the proof generation and verification is successful!

#### Generate typescript types for your contracts

1. `npm run build:types`

## Configuration 🛠️

Our scripts and tests require the configuration of a `.env` file for operation. This also allows for quick changes of networks between ganache and harmony, or any other evm. An example `.env.example` file exists in this repo for reference.

## Interact with the Contracts 

Some scripts have been provided in the `scripts/` directory to interact with mixer contracts.
To use these scripts, `cd scripts` and run `node <script> <...args>`. 

A few that scripts you might find useful are below:
- `deployNativeAnchor.js (<hasher address> <verifier address>)`: This script will deploy a new mixer. The user may optionally provide the command-line arguments of addresses for the hasher and verifier, so as to not waste gas on redeployments. Simply modify the denomination to easily create mixers of different sizes.

- `depositNativeAnchor.js <anchor address>`: This script will make a deposit to the mixer at the passed in address and return the secret note used to withdraw. 

- `withdrawNativeAnchor.js <anchor address> <secret note> <recipient>`: This script will withdraw from the mixer at the address given the secret note and recipient.

## Deployed Contract Instances


> Harmony Testnet Shard 0: 

``` 
    {
      Hasher: 0x5D09B9B8e94B6FC3DD43EC6261C5878Fc65Fc174
      Verifier: 0x1F52E77cAaD85C219F4776D200376F00f8C5857d
      NativeAnchor: 0x02b6cf5b0D1a1225C87fa9b6c3E8950E5a1f7D87
    }
```

## License

<sup>
Licensed under <a href="LICENSE">GNU General Public License</a>.
</sup>
