const appearMenu = document.querySelector('.menuDropDown');
const mobileMenu = document.querySelector('.default');
const disappearMenu = document.querySelector('.x-icon');
const disappearMenuOptions = document.querySelectorAll('.mobile-menu-li');

function display() {
  mobileMenu.classList.toggle('mobile-menu');
}

appearMenu.addEventListener('click', display);

disappearMenu.addEventListener('click', display);

for (let i = 0; i < disappearMenuOptions.length; i += 1) {
  disappearMenuOptions[i].addEventListener('click', display);
}