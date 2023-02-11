# Decrypt Ethereum geth Account's keystore to private key.

## English

This is the Package in order to import privateKey from JSON format file (Usually UTC~~~ file generated via go - ethereum puppeth)

Step1. make folder name "keystore". Then move JSON format pk file into this folder.

Step2. Assign the Actual path where keystore folder exist to "KEYSTORE_DIR" env Var.

- e.g. KEYSTORE_DIR=/Users/username/Desktop/ethTest/

Step3. Assign the passphrase which you inserted when creating the address to "PASSWORD" env var.

Step4. Assign the address (e.g. 0x2032923~~) to "ADDRESS" env var. Then Run the code.

You will get actual privateKey.

## Korean

이더리움 JSON 형식의 파일 (UTC~~) 에서 privateKey를 임포트 하는 패키지

keystore 폴더 안에 json 형식의 pk 파일을 담는다.

KEYSTORE_DIR 에 keystore 폴더가 존재하는 경로를 입력한다.

address를 생성할 때 입력한 passphrase를 PASSWORD 입력한다.

해당 address 값을 ADDRESS 입력하고서 코드를 실행시킨다.

## Env Explanation

- KEYSTORE_DIR=UTC.json 파일이 들어있는 keystore 폴더가 있는 경로
- PASSWORD=address 생성할 때 입력한 passphrase
- ADDRESS=
