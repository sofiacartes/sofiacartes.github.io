// Animación al hacer scroll (fade + slide)
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
});


// Efecto leve en el header al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.style.opacity = 1 - window.scrollY / 400;
});


// Efecto de movimiento suave en hover (más dinámico)
cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `
      perspective(600px)
      rotateX(${(y - rect.height / 2) / 15}deg)
      rotateY(${-(x - rect.width / 2) / 15}deg)
      scale(1.03)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});
