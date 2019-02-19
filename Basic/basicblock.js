const SHA256 = require("crypto-js/sha256");
/*Block is one reocrd in ledger of block chain
@param
index=index of node  in ledger
timestamp=time when block is created
data=data what is needed to stored in node
previousHash=hash of previous block that is connected to this
hash=hash of curent block
*/
class Block {

    constructor(index, data, previousHash) {

        this.index = index;

        this.previousHash = previousHash;

        this.timestamp = new Date();

        this.data = data;

        this.hash = this.calculateHash();

    }

    calculateHash() {
        //sha256 is used to calculate hash
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();

    }

}

//let chain be the ledger for our example program
let chain = [];





//get hash will return the hash of previus record in ledger 
function getHash() {
    
    if (chain.length >0) {
        return chain[chain.length - 1].hash;
    }
    else{
        return SHA256('0'+ ' ').toString();
    }

   
}

/*validateChain validates 2 thing in ledger by itrating through all nodes
 *  1.Checks the stored hash value stamp with calculating new hash stamp if both does not match then data is tamperd
 *  2.validate if hash of block is not tamperd by checking if that hash matches the old hash that was stored in next block to it
*/
function validateChain() {

    if (chain.length > 1) {
        for (let i = 1; i < chain.length; i++) {

            const currentBlock = chain[i];

            const previousBlock = chain[i - 1];
            
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;

            }

        }

    }


    return true;

}

/*addBlock
create a new block with index and adding hash of prevous record to current block
and calculate the hash for current block based on data provied in block
*/
function addBlock(data) {




    const newBlock=new Block(chain.length,data,getHash());
    
    if (validateChain()) {
        newBlock.hash = newBlock.calculateHash();
        chain.push(newBlock);
        return true;
    }

    else {
        return false;
    }


}
