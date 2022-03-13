import { promises as fs } from 'fs';
import fs_ from 'fs';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { SignedTransaction } from 'web3-core';

async function getSecretSey() {
    const key = fs_.readFileSync(".env").toString().trim();
    return key;
}

async function getVerifierAddress() {
    const addressRaw:Buffer = await fs.readFile("../hardhat/addressVerifier.txt"); 
    return addressRaw.toString();
}

async function getVerifierABI() {
    const jsonRAW:Buffer = await fs.readFile('../hardhat/artifacts/contracts/Verifier.sol/Verifier.json');
    const jsonString:string = jsonRAW.toString();
    const json = JSON.parse(jsonString);
    return json.abi;
}

async function getProofJson() {
    const jsonRAW:Buffer = await fs.readFile('./proof.json');
    const jsonString:string = jsonRAW.toString();
    return JSON.parse(jsonString);
}

async function getPublicJson() {
    const jsonRAW:Buffer = await fs.readFile('./public.json');
    const jsonString:string = jsonRAW.toString();
    return JSON.parse(jsonString);
}


async function getTX(web3:Web3, transaction:any, key:string) {
    const signedTx:SignedTransaction = await web3.eth.accounts.signTransaction(
        transaction,
        key
    );
    return signedTx.rawTransaction;
}

async function execTransaction(address:string, gas:number, abiData:any, web3:Web3, key:string){
    const transaction = {
        to: address,
        gas: gas,
        data: abiData
    };
    
    let rawTX:string = await getTX(web3, transaction, key) as string;

    await web3.eth.sendSignedTransaction(
        rawTX,
        function (error, hash) {
            if (!error) {
                console.log("Hash ", hash);
            } else {
                console.log(error);
            }
        }
    );
}

async function exec(){
    try{
        const key:string = await getSecretSey();
        const addressValidator:string = await getVerifierAddress();
        const abi:any = await getVerifierABI();
        const proofJSON:any = await getProofJson();
        const publicJSON:any = await getPublicJson();

        const web3 = new Web3('https://api.s0.b.hmny.io');
        const hmyMasterAccount = web3.eth.accounts.privateKeyToAccount(key);
        
        web3.eth.accounts.wallet.add(hmyMasterAccount);
        web3.eth.defaultAccount = hmyMasterAccount.address

        const contract:Contract = new web3.eth.Contract(
            abi,
            addressValidator
        );
        
        const methodABI:any = contract.methods.verifyProof(
            [proofJSON.pi_a[0], proofJSON.pi_a[1]],
            [proofJSON.pi_b[0], proofJSON.pi_b[1]],
            [proofJSON.pi_c[0], proofJSON.pi_c[1]],
            publicJSON
        ).encodeABI();

        await execTransaction(addressValidator, 30000, methodABI, web3, key);

        process.exit();
    } catch(e) {
        console.log(e);
    }

}

exec();
