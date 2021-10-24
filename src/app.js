//const axios = require('axios');
const ethers = require('ethers');
require('dotenv').config();

async function main() {
    const url = process.env.RINKEBY_URL; 
    const provider = new ethers.providers.JsonRpcProvider(url);

    let result = await provider.getBlock("latest");

    console.log(result)

    // log data to front end
    document.getElementById("BlockNumber").innerHTML = result.number;
    document.getElementById("TimeStamp").innerHTML = result.timestamp;
    document.getElementById("Hash").innerHTML = result.hash;
    document.getElementById("TransactionHash").innerHTML = result.transactions;
    document.getElementById("MinedBy").innerHTML = result.miner;
    document.getElementById("Difficulty").innerHTML = result.difficulty;
    document.getElementById("GasUsed").innerHTML = result.gasUsed;
    document.getElementById("GasLimit").innerHTML = result.gasLimit;

    setTimeout(main, 500);
}

main();