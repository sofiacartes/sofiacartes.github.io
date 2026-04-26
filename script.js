const links = document.querySelectorAll("a");
const transition = document.getElementById("page-transition");

// entrada
window.addEventListener("load", () => {
  transition.style.transition = "transform 0.6s ease";
  transition.style.transform = "translateY(100%)";
});

// salida
links.forEach(link => {
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

// modo oscuro con tecla D
document.addEventListener("keydown", (e) => {
  if (e.key === "d") {
    document.body.classList.toggle("dark");
  }
});
