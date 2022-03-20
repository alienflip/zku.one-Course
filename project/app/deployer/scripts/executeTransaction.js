async function getTX(web3, transaction, key) {
    const signedTx = await web3.eth.accounts.signTransaction(
        transaction,
        key
    );
    return signedTx.rawTransaction;
}

async function execTransaction(address, gas, abiData, web3, key){
    const transaction = {
        to: address,
        gas: gas,
        data: abiData
    };
    
    let rawTX = await getTX(web3, transaction, key);

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

module.exports = execTransaction;