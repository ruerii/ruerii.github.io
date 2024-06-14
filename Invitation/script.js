// Form Konfirmasi
const formKonfirmasi = document.getElementById('form-konfirmasi');

formKonfirmasi.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah form submit default

    // Ambil data dari form
    const nama = document.getElementById('nama').value;
    const hadir = document.getElementById('hadir').value;
    const pesan = document.getElementById('pesan').value;

    // Lakukan sesuatu dengan data (misalnya, kirim ke server)
    console.log('Nama:', nama);
    console.log('Kehadiran:', hadir);
    console.log('Pesan:', pesan);

    // Reset form
    formKonfirmasi.reset();
});
