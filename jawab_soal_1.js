const axios = require('axios');

// URL yang akan diminta
const url = 'https://id.wikipedia.org/wiki/Japanofilia';

// Melakukan permintaan HTTP GET menggunakan Axios
axios.get(url)
  .then(response => {
    // Menangani respons yang diterima
    console.log('Status Kode:', response.status);
    console.log('Data:', response.data);
  })
  .catch(error => {
    // Menangani kesalahan jika permintaan gagal
    console.error('Error:', error);
  });
