const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const yearElement = document.querySelector('#year');
const revealElements = document.querySelectorAll('.reveal');
const contactForm = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');
const audioButton = document.querySelector('.audio-button');
const trackNote = document.querySelector('.track-note');

yearElement.textContent = new Date().getFullYear();

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

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(contactForm).get('name');
  formStatus.textContent = `Thanks, ${name}. Your booking request is ready to send.`;
  contactForm.reset();
});

audioButton.addEventListener('click', () => {
  trackNote.textContent = `Playing ${audioButton.dataset.track}. Replace this with your real audio or video embed.`;
});
