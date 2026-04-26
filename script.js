const transition = document.getElementById("page-transition");

window.addEventListener("load", () => {
  transition.style.transition = "transform 0.6s ease";
  transition.style.transform = "translateY(100%)";
});

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
