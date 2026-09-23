/* ===========================
   PROYECTO.JS
   Renderiza el proyecto según ?id= usando PROJECTS (projects-data.js)
=========================== */
(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = (typeof PROJECTS !== 'undefined') ? PROJECTS[id] : null;

  const root = document.getElementById('project-detail');

  if (!project) {
    document.getElementById('pd-category').textContent = '[ Proyecto no encontrado ]';
    document.getElementById('pd-title').textContent = 'Este proyecto todavía no existe';
    document.getElementById('pd-subtitle').textContent = 'Vuelve al inicio para ver el resto del trabajo.';
    return;
  }

  document.title = project.title + ' — Portfolio';
  document.getElementById('pd-category').textContent = '[ ' + project.category + ' ]';
  document.getElementById('pd-title').textContent = project.title;
  document.getElementById('pd-subtitle').textContent = project.subtitle || '';
  document.getElementById('pd-year').textContent = project.year || '';

  const tagsEl = document.getElementById('pd-tags');
  (project.tags || []).forEach(tag => {
    const span = document.createElement('span');
    span.textContent = tag;
    tagsEl.appendChild(span);
  });

  const bodyEl = document.getElementById('pd-body');
  (project.desc || []).forEach(paragraph => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    bodyEl.appendChild(p);
  });

  const galleryEl = document.getElementById('pd-gallery');
  (project.images || []).forEach(imgNum => {
    const figure = document.createElement('figure');
    figure.className = 'project-detail__img';
    const img = document.createElement('img');
    img.src = `images/proyectos/${id}/${imgNum}.jpg`;
    img.alt = project.title;
    img.loading = 'lazy';
    figure.appendChild(img);
    galleryEl.appendChild(figure);
  });

  // Reveal on load (reuses site's fade style)
  root.classList.add('reveal', 'visible');
})();
