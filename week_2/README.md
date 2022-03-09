### Privacy & ZK VMs

> question 1

1. A blockchains state transitions to a new state through a consensus mechanism. A list of transactions are proposed by a executing node, and then the validator nodes must come to consensus as to whether to write this `block` to the chain. 

2. A ZK-VM, at its core, is a trans-compiler, along with a program execution engine. In the wider blockchain community, people do not want to have to understand how to program circuits, or why they should, they just want to make their solidity contracts and iterate fast. A ZK-VM allows for this abstraction layer. As far as I can tell, these are the only two sort-of-transparent projects which are marketed as zk-vm's. MidenVM and ZKsync.

    2.1: 
        - [Miden VM](https://lib.rs/crates/miden#:~:text=Miden%20VM%20is%20a%20simple%20stack%20machine.%20This,%28this%20limit%20will%20be%20removed%20in%20the%20future%29.): Here there is a clear explanation of the VM: It is a stack based machine, which can `initialize`, `push` and  `read` values from the stack. It has no RAM model. Every program has a `hash()` accessor inbuilt.   
        - [ZincVM](https://docs.zksync.io/dev/contracts/#programming-model): In this project, there is no graphical documentation on how the underlying VM architecture works, but the idea is that they have a turing complete machine designed and implimented. However, their [github](https://github.com/matter-labs/compiler-solidity) page suggests that they used LLVM to design and impliment their compiler.
    
    2.2: 
    
    2.3: 

### [Semaphore](https://github.com/alienflip/zku/tree/main/week_2/semaphore)

> question 2

### [TornadoCash](https://github.com/alienflip/zku/tree/main/week_2/TornadoCash)

> question 3

### Thinking In ZK

> question 4

1.
2.
