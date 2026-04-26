// animación al aparecer
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));


// efecto suave en header (parallax leve)
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.style.transform = `translateY(${window.scrollY * 0.2}px)`;
});
