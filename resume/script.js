// Fungsi untuk menampilkan/menyembunyikan bagian
function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section.style.display === 'none' || section.style.display === '') {
    section.style.display = 'block';
  } else {
    section.style.display = 'none';
  }
}

// Menambahkan event listener untuk tombol "Tampilkan/Sembunyikan"
const educationButton = document.getElementById('educationButton');
if (educationButton) {
  educationButton.addEventListener('click', () => toggleSection('education'));
}

const experienceButton = document.getElementById('experienceButton');
if (experienceButton) {
  experienceButton.addEventListener('click', () => toggleSection('experience'));
}

const skillsButton = document.getElementById('skillsButton');
if (skillsButton) {
  skillsButton.addEventListener('click', () => toggleSection('skills'));
}

const activitiesButton = document.getElementById('activitiesButton');
if (activitiesButton) {
  activitiesButton.addEventListener('click', () => toggleSection('activities'));
}

const awardsButton = document.getElementById('awardsButton');
if (awardsButton) {
  awardsButton.addEventListener('click', () => toggleSection('awards'));
}

const portfolioButton = document.getElementById('portfolioButton');
if (portfolioButton) {
  portfolioButton.addEventListener('click', () => toggleSection('portfolio'));
}

javascript
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Mencegah form submit default

  // Ambil data dari form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Tampilkan pesan sukses
  alert('Pesan Anda telah terkirim!');
  contactForm.reset(); // Reset form
});
