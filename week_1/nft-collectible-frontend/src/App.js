import { useEffect, useState } from 'react';
import './App.css';
import contract from './contracts/NFTCollectible.json';
import {ethers} from 'ethers';

const network = "rinkeby";
const contractAddress = "0xeea278ea429672281053458f0262844bd530916d";
const abi = contract.abi;

function App() {
    const [currentAccount, setCurrentAccount] = useState(null);

    const checkWalletIsConnected = async () => {
        const{ethereum} = window;
        if(!ethereum){
            console.log("Install MetaMask!");
            return;
        }else{
            console.log("LFG!");
        }

        const accounts = await ethereum.request({method: 'eth_accounts'});
        if(accounts.length !== 0){
            const account = accounts[0];
            setCurrentAccount(account);
        }else{
            console.log("No authorised accounts");
        }
    }

    const connectWalletHandler = async () => {
        const{ethereum} = window;
        if(!ethereum){
            console.log("Install MetaMask!");
            return;
        }else{
            console.log("LFG!");
        }

        try{
            const accounts = await ethereum.request({method:'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
         }catch(e){
             console.log(e);
         }
    }

    const mintNFTHandler = async () => {
        try{
            const {ethereum} = window;
            if(ethereum){
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const nftContract = new ethers.Contract(contractAddress, abi, signer);
    
                let reciever = "0xeB15b55C90FdEDcFB8A6128f6207347Df181099f";
                let id = 0;
                let URI = "0.com";
                let description = "01001";

                let nftTx = await nftContract.sendNFT(reciever, URI, id, description);
    
                await nftTx.wait();
                console.log(nftTx.hash);
            } else {
                console.log("Ethereum object not found");
            }
        } catch(e) {
            console.log(e);
        }
    }

    /*
     * here we ask for the root index of the merkle tree with respect to the array
     * and we also ask for a log of the array representation of the merkle tree
     */
    const getMerkleLeaves = async () => {
        try{
            const {ethereum} = window;
            if(ethereum){
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const nftContract = new ethers.Contract(contractAddress, abi, signer);
    
                let merkleRootIndex = await nftContract.getMerkleRootIndex();
                let merkleTreeArray = await nftContract.getMerkleLeaves();
    
                console.log("root index: ", merkleRootIndex.toNumber());
                console.log("tree array", merkleTreeArray);

                const inputJson = '{"leaves":[' + merkleTreeArray.toString() + "]}";
                console.log(inputJson);
            } else {
                console.log("Ethereum object not found");
            }
        } catch(e) {
            console.log(e);
        }
    }

    const connectWalletButton = () => {
        return(
            <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
                Connect wallet!
            </button>
        )
    };

    const mintNFTButton = () => {
        return(
            <button onClick={mintNFTHandler} className='cta-button mint-nft-button'>
                Mint NFT!
            </button>
        )
    };

    const getMerkleLeavesButton = () => {
        return(
            <button onClick={getMerkleLeaves} className='cta-button get-merkle-button'>
                Get Mint Tree!
            </button>
        )
    }

    useEffect(() => {
        checkWalletIsConnected();
    }, []);

    return(
        <div className='main-app'>
            <h1>
                zkuNFT
            </h1>
            <div>
                {currentAccount ? mintNFTButton() : connectWalletButton()}
            </div>
            <div>
                {getMerkleLeavesButton()}
            </div>
        </div>
    )
}

export default App;