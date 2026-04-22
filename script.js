const cards = document.querySelectorAll('.card');
const preview = document.getElementById('preview');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    preview.textContent = card.dataset.info;
  });

  card.addEventListener('mouseleave', () => {
    preview.textContent = '';
  });
});

// scroll suave
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
