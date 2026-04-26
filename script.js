const transition = document.getElementById("page-transition");

// entrada
window.addEventListener("load", () => {
  transition.style.transition = "transform 0.6s ease";
  transition.style.transform = "translateY(100%)";
});

// salida
document.querySelectorAll("a").forEach(link => {
  if (link.hostname === window.location.hostname) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const url = this.href;

      transition.style.transform = "translateY(0%)";

      setTimeout(() => {
        window.location.href = url;
      }, 500);
    });
  }
});

// animación scroll
const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.6 });

projects.forEach(p => observer.observe(p));
