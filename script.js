const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah form submit default

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Validasi inputan
    if (!validateEmail(email)) {
        alert('Format email tidak valid!');
        return;
    }

    if (!validatePhone(phone)) {
        alert('Format nomor telepon tidak valid!');
        return;
    }

    // Jika validasi berhasil, lanjutkan dengan proses pendaftaran
    // (misalnya, kirim data ke server)
    console.log('Data pendaftaran:', name, email, phone);
});

function validateEmail(email) {
    // Gunakan regex untuk validasi email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    // Gunakan regex untuk validasi nomor telepon
    // (sesuaikan dengan format yang diinginkan)
    const re = /^\d{10,13}$/; // Contoh: 10-13 digit angka
    return re.test(phone);
}