1. Semaphore allows Ethereum users to prove their membership of a set without revealing their original identity. At the same time, it allows users to signal their endorsement of an arbitrary string. It is designed to be a simple and generic privacy layer for Ethereum DApps. Use cases include private voting, whistleblowing, mixers, and anonymous authentication.

2. Here is the [semaphore toolchain](http://semaphore.appliedzkp.org/docs/quick-setup) installation:

```
git clone git@github.com:appliedzkp/semaphore.git
yarn add hardhat --dev
yarn add @appliedzkp/semaphore-contracts
yarn add @zk-kit/identity @zk-kit/protocols --dev
yarn add @zk-kit/incremental-merkle-tree circomlibjs@0.0.8 --dev
yarn add hardhat-dependency-compiler --dev
yarn hardhat compile
yarn hardhat test
```

![tests]()
