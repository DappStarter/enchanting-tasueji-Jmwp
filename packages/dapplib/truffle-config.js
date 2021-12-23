require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss inner argue tail skin'; 
let testAccounts = [
"0x627327415fe72c568e2ff80109f0645e824f43b948d504e81a8a07a73e321115",
"0x15b4b938287250f183c68aa0ea4cb7fab90c96543554907418c6d36e0ac5e69f",
"0x081fb08ddcdf383696077d04470c7e01b9039372d1fa276eb34c8d478324810f",
"0xcb2d2b804460cc2b3d1ea5d731a025961d1d6145abee8411be7cc18cc30e9d88",
"0x953c784538c52b28ad60f92c0a04369546bb0829047f615233aa082b6530501c",
"0xb8cd281759c8aadf3ee9fe6612db31326eba351845f1e9e1f1ffcc71e77d52d1",
"0xe2800d5b2c1d7752879683ed2adf1f8cdfdcd7ba7f1193a68f0d53ab1b2cfd1d",
"0x957cda6f3d47e153720ea78452d6bc28726af30e2aab9700291672c1f5d7036e",
"0x46ad0933f16ee5e5bdff648a12d57e4be3adb6080d146e2eeb5c02ad7e22694c",
"0x28e767c5a2a1df674e295e50a0cb84fbd1fa70a547dbc83d418034de4a37f3bf"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


