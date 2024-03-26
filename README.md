# Gold_transferor_ui
Simple ui (very simple...) to use the soulbound program and transfer gold from one lad to another.
This works if all lads are in the same wallet and they are all staked.

1/ create .env.local file with the following variables:
NEXT_PUBLIC_TRANSFER_AMOUNT
NEXT_PUBLIC_FROM_NFT
NEXT_PUBLIC_TO_NFT
NEXT_PUBLIC_RPC_URL
You can copy & rename the existing .env.example

2/ run `npm install` in the root directory.

3/ run `npm run dev` to start the development server.

4/ visit the website on http://localhost:3000 & open the browser console (F12)

5/ connect your wallet and click the transfer gold button

Be patient. There should be 3 transactions to sign.

Fork of https://github.com/solana-labs/dapp-scaffold and https://github.com/stranzhay/gold-transferoooor