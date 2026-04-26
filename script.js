const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.6 });

projects.forEach(p => observer.observe(p));
