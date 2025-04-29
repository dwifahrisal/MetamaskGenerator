const { Wallet } = require("ethers");
const fs = require("fs");
const readline = require("readline");

// ASCII Art
console.log(`
**********************************************
*                                            *
*        🔐 METAMASK GENERATOR 🔐            *
*											 *
*           @mangisal V.2.0                  *
*                                            *
**********************************************
`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Berapa banyak wallet yang ingin dibuat? ", (answer) => {
  const jumlah = parseInt(answer);
  if (isNaN(jumlah) || jumlah <= 0) {
    console.error("❌ Masukkan angka yang valid.");
    rl.close();
    return;
  }

  const wallets = [];
  const addressStream = fs.createWriteStream("addresses.txt");
  const privateKeyStream = fs.createWriteStream("privatekeys.txt");

  for (let i = 0; i < jumlah; i++) {
    const wallet = Wallet.createRandom();
    wallets.push({
      address: wallet.address,
      privateKey: wallet.privateKey,
    });

    addressStream.write(wallet.address + "\n");
    privateKeyStream.write(wallet.privateKey + "\n");

    console.log(
      `#${i + 1} | 🧾 Address: ${wallet.address} | 🔑 PrivateKey: ${wallet.privateKey.slice(0, 12)}...`
    );
  }

  addressStream.end();
  privateKeyStream.end();

  // Menulis hasil ke wallets.json dalam format JSON satu baris
  const jsonOutput = JSON.stringify(wallets);
  fs.writeFileSync("wallets.json", jsonOutput);

  console.log("\n✅ Wallet berhasil dibuat dan disimpan ke:");
  console.log("  - addresses.txt");
  console.log("  - privatekeys.txt");
  console.log("  - wallets.json (format JSON dalam satu baris)\n");

  rl.close();
});
