require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note ridge proof gesture narrow orient term'; 
let testAccounts = [
"0xa3d5be17cca82141c7295582b45732d7218a90d91563149b0c168cfd6c2bd1ee",
"0x5c8c49aa801ba747bafbed4e8d7519c31c518a5a9e2f978341a79ccf5af76e31",
"0xca7c79123c56f50f828580e4d3b3c38b60dfe8b0d9c507de49d4cc1a19b1dc21",
"0x814c44be474afb82ffd1182183a6e819aca7d24e74fc193d81b509de2bb5b5d0",
"0x4c7b21ff22b13e4ce6bec2aed94747b07a0accf4953ef8263d758fb8f8ade0eb",
"0x04b711f2d042178de38f794cfecd3a748f5c5600a9f3023826f8b5d0a7f1f2de",
"0xb630edd37d9e794649d426c662d1586b1b3abf43b3518c145dbd9d2e7e5eca57",
"0xa058a96a9594e9e220acecb6801539157c7a7c7b0dc7c6383fdaa62c69b707e8",
"0xcdb021a8de0b47e9f74566260f9669939f6a9837beedd3c20118072ffcfc9142",
"0x631a5dbc1d13f155c6bb27679247175d6706d3b41b6c5e023ca2a40f5f1b7749"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

