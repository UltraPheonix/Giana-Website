const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const yearElement = document.querySelector('#year');
const revealElements = document.querySelectorAll('.reveal');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const revealAll = () => revealElements.forEach((element) => element.classList.add('is-visible'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealElements.forEach((element) => observer.observe(element));

  // Safety net: if the observer never fires (some embedded browsers), reveal everything after load.
  window.addEventListener('load', () => {
    setTimeout(() => {
      const anyVisible = Array.from(revealElements).some((element) => element.classList.contains('is-visible'));
      if (!anyVisible) revealAll();
    }, 400);
  });
} else {
  revealAll();
}
