// ===== BOOT SEQUENCE =====
document.addEventListener('DOMContentLoaded', () => {
  const bootScreen = document.getElementById('boot-screen');
  const app = document.getElementById('app');

  // Respect reduced motion: skip boot delay
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const bootDuration = prefersReducedMotion ? 0 : 4200;

  setTimeout(() => {
    bootScreen.classList.add('fade-out');
    app.classList.remove('hidden');
    setTimeout(() => bootScreen.remove(), 500);
  }, bootDuration);

  // ===== TYPEWRITER ROLE ROTATION =====
  const roles = [
    'Cybersecurity',
    'Software Development',
    'Cloud Engineering',
    'Networking & Systems Admin',
    'Data & Databases'
  ];
  const typewriterEl = document.getElementById('typewriter');
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      typewriterEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      charIndex--;
      typewriterEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 40 : 70);
  }
  typeLoop();

  // ===== SCROLL REVEAL =====
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // trigger skill bar animation if present
        entry.target.querySelectorAll('.bar-fill').forEach(bar => {
          bar.classList.add('animated');
        });
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  // ===== ACTIVE NAV HIGHLIGHTING =====
  const sections = document.querySelectorAll('.panel[id]');
  const fileLinks = document.querySelectorAll('.file-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fileLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.target === entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(sec => navObserver.observe(sec));

  // ===== MOBILE MENU TOGGLE =====
  const menuToggle = document.getElementById('menu-toggle');
  const fileTree = document.querySelector('.file-tree');
  menuToggle.addEventListener('click', () => {
    fileTree.classList.toggle('open');
  });
  fileLinks.forEach(link => {
    link.addEventListener('click', () => {
      fileTree.classList.remove('open');
    });
  });
});
