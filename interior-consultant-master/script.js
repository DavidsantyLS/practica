
const menu = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');

});