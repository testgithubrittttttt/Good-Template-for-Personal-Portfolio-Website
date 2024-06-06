document.addEventListener('DOMContentLoaded', function () {
  // Smooth Scroll
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // Dark/Light Mode Toggle
  const modeToggle = document.getElementById('mode-toggle');
  modeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });

  // Contact Form Validation
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }

    alert('Thank you for your message!');
    contactForm.reset();
  });
});
