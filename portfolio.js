const appearMenu = document.querySelector('.menuDropDown');
const mobileMenu = document.querySelector('.default');
const disappearMenu = document.querySelector('.x-icon');
const disappearMenuOptions = document.querySelectorAll('.mobile-menu-li');
const popupOpen = document.querySelector('.popup-default');
const popupClick = document.querySelectorAll('.btn-Project');
const popupClose = document.querySelector('.x-display');


function display() {
  mobileMenu.classList.toggle('mobile-menu');
}

function display2() {
  popupOpen.classList.toggle('show');
}

for (let i = 0; i < disappearMenuOptions.length; i += 1) {
  disappearMenuOptions[i].addEventListener('click', display);
}
for (let j=0; j < popupClick.length; j += 1) {
  popupClick[j].addEventListener('click', display2);
 }

appearMenu.addEventListener('click', display);
disappearMenu.addEventListener('click', display);
popupClose.addEventListener('click', display2);



