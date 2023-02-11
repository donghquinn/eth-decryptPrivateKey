import { config } from 'dotenv';
import Keythereum from 'keythereum';

config();

const { PASSWORD, ADDRESS, KEYSTORE_DIR } = process.env;

export async function decrypt() {
    try {
        // The address of which you want to decrypt keystore.
        const address = ADDRESS;

        // The directory where the keystore folder saved. - Should Be Save in "keystore" folder
        const dir = KEYSTORE_DIR;

        // phrase to unlock the address which you insert 
        const passphrase = PASSWORD;

        const keyObject = Keythereum.importFromFile(address, dir);

        console.log("key object ok");

        const privateKey = await Keythereum.recover(passphrase, keyObject);

        console.log("privateKey ok")

        // Print out the decryptized Keystore -> privateKey
        const result = privateKey.toString('hex');

        console.log("Derived Private Key: %o", result);

        return result;
    } catch (error) {
        console.log("Error: %o", { error });

        throw new Error(`Error: ${error}`);
    }

}

await decrypt();