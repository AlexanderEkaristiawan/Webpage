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

document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const nav = document.querySelector('nav');

  if (menu.classList.contains('open') && !nav.contains(e.target)) {
    menu.classList.remove('open');
  }
});

const sponsorshipForm = document.getElementById('sponsorshipApplicationForm');
const formStatus = document.getElementById('formStatus');

if (sponsorshipForm && formStatus) {
  sponsorshipForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formStatus.textContent = 'Thank you. Your sponsorship application has been recorded and is ready for backend integration.';
    sponsorshipForm.reset();
  });
}
