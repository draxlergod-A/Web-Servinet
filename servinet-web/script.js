const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Menú adaptable para celulares.
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
  });
});

// Preguntas frecuentes: permite abrir una respuesta a la vez.
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const currentItem = question.closest('.faq-item');
    const shouldOpen = !currentItem.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach((item) => {
      item.classList.remove('open');
      item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    if (shouldOpen) {
      currentItem.classList.add('open');
      question.setAttribute('aria-expanded', 'true');
    }
  });
});

// El año del pie de página se actualiza automáticamente.
document.getElementById('currentYear').textContent = new Date().getFullYear();
