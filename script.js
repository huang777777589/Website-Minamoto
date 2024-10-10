document.addEventListener('DOMContentLoaded', function () {
  const backToTopButton = document.querySelector('#back-to-top');

  // Tampilkan tombol "Kembali ke atas" ketika halaman di-scroll
  window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });

  backToTopButton.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const navLinks = document.querySelectorAll('nav ul li a');
  
  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetSection = document.querySelector(this.getAttribute('href'));
          targetSection.scrollIntoView({ behavior: 'smooth' });
      });
  });
});