function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const nav  = document.querySelector('nav');
  if (menu.classList.contains('open') && !nav.contains(e.target)) {
    menu.classList.remove('open');
  }
});