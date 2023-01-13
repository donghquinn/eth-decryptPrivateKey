import { config } from 'dotenv';
import Keythereum from 'keythereum';

config();

const { PASSWORD, ADDRESS, KEYSTORE_DIR } = process.env;

// The address of which you want to decrypt keystore.
const address = ADDRESS;

// The directory where the keystore folder saved. - Should Be Save in "keystore" folder
const dir = KEYSTORE_DIR;

// phrase to unlock the address which you insert 
const passphrase = PASSWORD;

export async function decrypt(address, dir, passphrase) {
    const keyObject = Keythereum.importFromFile(address, dir);

    console.log("key object ok");

    const privateKey = await Keythereum.recover(passphrase, keyObject);

    console.log("privateKey ok")

    // Print out the decryptized Keystore -> privateKey
    const result = privateKey.toString('hex');

    console.log("Derived Private Key: %o", result);

    return result;
}

await decrypt(address, dir, passphrase);