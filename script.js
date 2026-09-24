/* ===========================
   SCRIPT.JS
=========================== */

// ---- Cursor ----
const cursor = document.getElementById('cursor');
let mx = 0, my = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
});
(function loop() {
  cx += (mx - cx) * 0.14;
  cy += (my - cy) * 0.14;
  cursor.style.left = cx + 'px';
  cursor.style.top  = cy + 'px';
  requestAnimationFrame(loop);
})();

document.querySelectorAll('a, button, .project-row').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-big'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-big'));
});

// ---- Nav scroll ----
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ---- Reveal on scroll ----
const revealEls = document.querySelectorAll('.reveal');
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      ro.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => ro.observe(el));

// ---- Counter animado ----
function countUp(el) {
  const target = +el.dataset.target;
  const dur = 1400;
  const t0 = performance.now();
  const tick = now => {
    const p = Math.min((now - t0) / dur, 1);
    const ep = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(ep * target);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  };
  requestAnimationFrame(tick);
}
const statsEl = document.querySelector('.about__stats');
if (statsEl) {
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      statsEl.querySelectorAll('.stat__num').forEach(countUp);
    }
  }, { threshold: 0.5 }).observe(statsEl);
}

// ---- Project rows stagger reveal ----
document.querySelectorAll('.project-row').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateX(-16px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      el.style.opacity = '1';
      el.style.transform = 'translateX(0)';
    }
  }, { threshold: 0.1 }).observe(el);
});

// ---- Typing effect en hero mono ----
const monoEl = document.querySelector('.hero__mono');
if (monoEl) {
  const text = monoEl.textContent;
  monoEl.textContent = '';
  monoEl.style.opacity = '1';
  monoEl.style.animation = 'none';
  let i = 0;
  const type = () => {
    if (i < text.length) {
      monoEl.textContent += text[i++];
      setTimeout(type, 55);
    }
  };
  setTimeout(type, 300);
}
