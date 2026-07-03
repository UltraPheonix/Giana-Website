const yearElement = document.querySelector('#year');
const revealElements = document.querySelectorAll('.reveal');
const siteHeader = document.querySelector('.site-header');
const introHero = document.querySelector('.intro-hero');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Nav bar starts near the bottom of the hero photo and travels up to dock at the
// top as you scroll, morphing from a large translucent bar into a compact one.
if (siteHeader && introHero) {
  const DOCK_TOP = 12;
  const GAP = 22;

  const updateHeader = () => {
    const heroHeight = introHero.offsetHeight;
    const headerHeight = siteHeader.offsetHeight;
    const heroBottom = heroHeight - window.scrollY;
    const startTop = heroHeight - headerHeight - GAP;
    const targetTop = Math.max(DOCK_TOP, heroBottom - headerHeight - GAP);
    siteHeader.style.top = targetTop + 'px';

    const travel = startTop - DOCK_TOP;
    const progress = travel > 0 ? (targetTop - DOCK_TOP) / travel : 0;
    const dock = Math.min(1, Math.max(0, 1 - progress));
    siteHeader.style.setProperty('--dock', dock.toFixed(3));
    siteHeader.classList.toggle('is-over-hero', dock < 0.5);
    // Hide the photo gradient + bar panel while at the very top; show them on scroll.
    document.documentElement.classList.toggle('is-scrolled', window.scrollY > 0);
  };

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateHeader();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateHeader);
  window.addEventListener('load', updateHeader);
  updateHeader();
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
