// Efek Hover pada Menu
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.classList.add('hover');
  });

  item.addEventListener('mouseout', () => {
    item.classList.remove('hover');
  });
});

// Animasi
const animatedElements = document.querySelectorAll('.animated');

animatedElements.forEach(element => {
  element.classList.add('hidden'); // Sembunyikan elemen saat pertama kali dimuat

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.classList.remove('hidden');
        element.classList.add('show'); // Tambahkan kelas 'show' untuk animasi
        observer.disconnect(); // Hentikan pengamatan setelah animasi selesai
      }
    });
  });

  observer.observe(element);
});

// Formulir Kontak
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Mencegah pengiriman default

  // Validasi formulir (opsional)

  // Kirim data formulir ke server (menggunakan AJAX atau Fetch API)
  // ...

  // Tampilkan pesan sukses atau kesalahan
  // ...
});


function beliKue(button) {
  const jumlahSpan = button.previousElementSibling.querySelector('.jumlah-kue');
  let jumlah = parseInt(jumlahSpan.textContent);
  jumlah++;
  jumlahSpan.textContent = jumlah;
}

