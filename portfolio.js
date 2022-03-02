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
for (let j = 0; j < popupClick.length; j += 1) {
  popupClick[j].addEventListener('click', display2);
}

appearMenu.addEventListener('click', display);
disappearMenu.addEventListener('click', display);
popupClose.addEventListener('click', display2);

let portfolio = [
  object1= {
    img: 'images/Snapshoot-Portfolio1.svg',
    name: 'Tonic',
    information: ['CANOPY', 'Back End Dev', 2015],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technolgies: ['html', 'css', 'javascript'],
    seeLive: 'https://oshanedesign.github.io/My-Portfolio/',
    seeSource: 'https://github.com/oshanedesign/My-Portfolio',
  },
  object2= {
    img: 'images/Snapshoot-Portfolio2.svg',
    name: 'Tonic',
    information: ['CANOPY', 'Back End Dev', 2015],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technolgies: ['html', 'css', 'javascript'],
    seeLive: 'https://oshanedesign.github.io/My-Portfolio/',
    seeSource: 'https://github.com/oshanedesign/My-Portfolio',
  },
  object3= {
    img: 'images/Snapshoot-Portfolio3.svg',
    name: 'Tonic',
    information: ['CANOPY', 'Back End Dev', 2015],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technolgies: ['html', 'css', 'javascript'],
    seeLive: 'https://oshanedesign.github.io/My-Portfolio/',
    seeSource: 'https://github.com/oshanedesign/My-Portfolio',
  },
  object4= {
    img: 'images/Snapshoot-Portfolio4.svg',
    name: 'Tonic',
    information: ['CANOPY', 'Back End Dev', 2015],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technolgies: ['html', 'css', 'javascript'],
    seeLive: 'https://oshanedesign.github.io/My-Portfolio/',
    seeSource: 'https://github.com/oshanedesign/My-Portfolio',
  },
];

