### Privacy & ZK VMs

> question 1

1. A blockchains state transitions to a new state through a consensus mechanism. A list of transactions are proposed by a executing node, and then the validator nodes must come to consensus as to whether to write this `block` to the chain. 

2. A ZK-VM, at its core, is a trans-compiler, along with a program execution engine. In the wider blockchain community, people do not want to have to understand how to program circuits, or why they should, they just want to make their solidity contracts and iterate fast. A ZK-VM allows for this abstraction layer. As far as I can tell, these are the only two sort-of-transparent projects which are marketed as zk-vm's. [Miden VM](https://lib.rs/crates/miden#:~:text=Miden%20VM%20is%20a%20simple%20stack%20machine.%20This,%28this%20limit%20will%20be%20removed%20in%20the%20future%29.) and [zkSYNC](https://docs.zksync.io/dev/contracts/#programming-model).

    2.1: 
    
        - MidenVM : Here there is a clear explanation of the VM: It is a stack based machine, which can `initialize`, `push` and  `read` values from the stack. It has no RAM model. Every program has a `hash()` accessor inbuilt.   
        - zkSYNC: In this project, there is no graphical documentation on how the underlying VM architecture works, but the idea is that they have a turing complete machine designed and implimented. However, their github.com/matter-labs/compiler-solidity page suggests that they used LLVM to design and impliment their compiler.
    
    2.2: 
        
        - MidenVM: Althought this VM is very transparent, it requires that you need to learn a new language in order to deploy any solution, namely, miden assembly.
        - zkSync: 'Although zkSync is built on some of the most cutting-edge cryptography (such as PLONK and RedShift), we were very conservative with respect to security choices made in the protocol. Every component relies exclusively on well-established cryptographic assumptions widely considered valid in the academic and professional security communities.' 
    
    2.3: The MidenVM

![arch0](https://github.com/alienflip/zku/blob/main/week_2/arch0.jpeg)

        The public inputs of a zkVM include both a program hash and a current chain-state hash. privately, the coder gives the program, the inital state, and a secret input. In the case of the zkZM, the runtime output will also include a pointer to a proof.
        
![arch1](https://github.com/alienflip/zku/blob/main/week_2/arch1.jpeg)
        
        The above two diagrams are a compact way to describe the following: The miden VM architecture works is this: you write an asssembly program (MAST executed: master abstract syntax tree), this is compiled by the assembler into bytecode. The bytecode is a string of digits, each of which reference either an opcode, some constraints, some data through a location pointer, and flags. When the program is compiled into bytecode, it is then run through a turing complete machine (I/O diagram above) which then returns the final state of the program as a hash. I For more info on how a VM works, this is a great resource https://www.nand2tetris.org/. 

### [Semaphore](https://github.com/alienflip/zku/tree/main/week_2/semaphore)

> question 2

### [TornadoCash](https://github.com/alienflip/zku/tree/main/week_2/TornadoCash)

> question 3

### Thinking In ZK

> question 4

1.
2.
