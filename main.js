const hamburgerMenuOpenButton = document.querySelector('.hamburger-menu-open');
const hamburgerMenuCloseButton = document.querySelector('.close-icon');
const overlay = document.querySelector('.overlay');

hamburgerMenuOpenButton.addEventListener('click', () => {
  const mobileMenu = document.querySelector('.hamburger-menu-wrapper');
  mobileMenu.classList.add('open');
  overlay.classList.add('open');
});

hamburgerMenuCloseButton.addEventListener('click', () => {
  const mobileMenu = document.querySelector('.hamburger-menu-wrapper');
  mobileMenu.classList.remove('open');
  overlay.classList.remove('open');
});
