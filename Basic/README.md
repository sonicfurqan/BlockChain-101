# BlockChain-101
o create a blockchain using Javascript, let’s go through the basics.

1.
Each block in a chain of blocks has a hash of a previous block. In the event of an attack or malicious behavior, the hash is significantly changed, which affects the whole blockchain, freezing it and therefore eliminating the chance of changing the block.

To create a block, consider the details it contains:

a.Index	= The block number	
b.Timestamp	= The time of creation
c.Data	=The data inside the block
d.Previous Hash	=The hash of the previous block
e.Hash=	The hash of the current block
		
simple block example

        const SHA256 = require("crypto-js/sha256");

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
      }


2.Always Validate a ledger/array of objects on our case, Hash of the previous and current blocks should match if hash does not match then data is tampered


