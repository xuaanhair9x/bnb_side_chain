const EthereumTx = require('ethereumjs-tx').Transaction;
const util = require('ethereumjs-util');

// Create a new transaction object
const transaction = new EthereumTx({
  from: '0xec4dd6c149f3aae3f5abb9344d91848a333915e5',
  to: '0x1487e0168cb3d7dde96864c47e37b6ec199b7196',
  gasPrice: 1000000000,
  gasLimit: 21000,
  value: '0x56bc75e2d63100000',
  nonce: 1,
  v: '0x6d84',
  r: '0xca96c3f4f2268ab55e41496d123cd24be2cbfcd6e5cfe766239567f6abc49dfa',
  s: '0x595c6c4530f53dbb9e6aa1b061fe885fb14edf9be41e86bb4698c743bbec3daa',
},
{ chain: '14000' });

// Serialize the transaction object
const serializedTx = transaction.serialize();

// Apply RLP encoding
const rlpEncoded = util.rlp.encode(serializedTx);

// Convert to raw hexadecimal format
const rawTransaction = rlpEncoded.toString('hex');

console.log(rawTransaction);