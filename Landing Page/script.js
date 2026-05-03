function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

(function () {
  const loader = document.getElementById('pageLoader');
  function hideLoader() { loader.classList.add('hidden'); }
  if (document.readyState === 'complete') {
    setTimeout(hideLoader, 300);
  } else {
    window.addEventListener('load', function () { setTimeout(hideLoader, 300); });
  }
})();

// Close mobile menu on outside click
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const nav  = document.querySelector('nav');
  if (menu.classList.contains('open') && !nav.contains(e.target)) {
    menu.classList.remove('open');
  }
});

const statCounters = document.querySelectorAll('.stat-value[data-count-to]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function formatStatValue(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

function setStatValue(counter, value) {
  counter.textContent = formatStatValue(value);
}

function animateStatCounter(counter) {
  if (counter.dataset.animated === 'true') return;

  counter.dataset.animated = 'true';
  const target = Number(counter.dataset.countTo || 0);

  if (reduceMotion) {
    setStatValue(counter, target);
    return;
  }

  const duration = 1600;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.round(target * eased);

    setStatValue(counter, currentValue);

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

if (statCounters.length) {
  if (reduceMotion || !('IntersectionObserver' in window)) {
    statCounters.forEach((counter) => animateStatCounter(counter));
  } else {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        animateStatCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.45 });

    statCounters.forEach((counter) => statsObserver.observe(counter));
  }
}
