const readline = require('readline');

// Fungsi untuk membaca input dari user
function getInput(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(prompt, answer => {
      rl.close();
      resolve(answer);
    });
  });
}

// Fungsi async await yang menggunakan callback function
async function main() {
  try {
    // Menerima input dari user
    const name = await getInput('Masukkan namamu: ');

    // Menampilkan pesan dengan menggunakan async await
    await displayMessage(name, message => {
      console.log(message);
    });
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}

// Fungsi yang menggunakan callback function
function displayMessage(name, callback) {
  setTimeout(() => {
    const message = `Halo, ${name}! Selamat datang di program CLI sederhana.`;
    callback(message);
  }, 1000);
}

// Memanggil fungsi utama
main();
