# 🔐 Metamask Wallet Generator

## 📜 Deskripsi
Metamask Wallet Generator adalah skrip yang memungkinkan Anda untuk menghasilkan beberapa wallet Ethereum secara acak menggunakan library `ethers.js`.
Skrip ini menghasilkan alamat dan private key, kemudian menyimpannya dalam beberapa file berbeda, termasuk dalam format JSON.

## 🚀 Fitur
- Menghasilkan beberapa wallet Ethereum secara acak.
- Menyimpan alamat wallet ke dalam `addresses.txt`.
- Menyimpan private key wallet ke dalam `privatekeys.txt`.
- Menyimpan alamat dan private key dalam format JSON ke dalam `wallets.json`.


## 🖥️ Prasyarat
Pastikan Anda memiliki **Node.js** dan **npm** yang terinstal pada sistem Anda. Anda dapat mengunduh dan menginstalnya dari [Node.js](https://nodejs.org/).

## 🔧 Instalasi

1. Clone repositori ini ke komputer Anda:

    ```bash
    git clone https://github.com/dwifahrisal/MetamaskGenerator.git
    ```

2. Masuk ke direktori proyek:

    ```bash
    cd MetamaskGenerator
    ```

3. Instal dependensi yang diperlukan:

    ```bash
    npm install
    ```

## 🏃‍♂️ Penggunaan

Setelah instalasi selesai, Anda dapat menjalankan skrip untuk membuat wallet:

```bash
node generatewallet.js
