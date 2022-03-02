const appearMenu = document.querySelector('.menuDropDown');
const mobileMenu = document.querySelector('.default');
const disappearMenu = document.querySelector('.x-icon');
const disappearMenuOptions = document.querySelectorAll('.mobile-menu-li');
const popupOpen = document.querySelector('.popup-default');
const popupClick = document.querySelectorAll('.btn-Project');
const popupClose = document.querySelector('.x-display');
let portfolio = [
  {
  img: 'images/Snapshoot-Portfolio1.svg',
  name: 'Tonic',
  information1: 'CANOPY',
  information2: 'Back End Dev',
  information3: '2015',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  technolgies1: 'html',
  technologies2: 'css',
  technologies3: 'javascript',
  seeLive: 'https://oshanedesign.github.io/My-Portfolio/',
  seeSource: 'https://github.com/oshanedesign/My-Portfolio',
  span1: 'See live',
  span2: 'See source',
}
];
const popupMenu = document.createElement('div');
popupMenu.classList.add('show');

const markup = `
  <div class="mobile-menu-header">
    <img class="x-display" src="images/xdisplay.svg" alt="xicon">
  </div>
  <h2 class="tonic">Tonic</h2>
  <ul class="sub-Points">
    <li class="canopy">CANOPY</li>
    <li class="sub-Text">Back End Dev</li>
    <li class="sub-Text">2015</li>
  </ul>
  <div class="desktop-Img-Works">
    <img class="snapshoot" src="images/Snapshoot-Portfolio1.svg" alt="Snapshoot-Image">
  </div>
  <div>
    <p class="popup-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam est dignissimos tempore nam ratione, distinctio repellat atque, et ad hic voluptatem quidem! Quia ratione, in nihil reprehenderit ad ullam est!</p>
  </div>
  <div class="lang">
    <ul class="languages">
      <li><button class="languages-List" type="submit">html</button></li>
      <li><button class="languages-List" type="submit">css</button></li>
      <li><button class="languages-List" type="submit">javascript</button></li>
    </ul>
  </div>
  <div class="popup-buttons">
    <button class="see-live">
      <a class="live-link" href="https://oshanedesign.github.io/My-Portfolio/">
        <span>See Live</span>
        <img src="images/kittyproject.svg" alt="kittyicon"></a>
    </button>
    <button class="see-source">
      <a class="source-link" href="https://github.com/oshanedesign/My-Portfolio">
        <span>See Source</span>
        <img src="images/symbolproject.svg" alt="symbolicon"></a>
    </button>
    </div>
  </div>`;

  popupMenu.innerHTML = markup;

function display() {
  mobileMenu.classList.toggle('mobile-menu');
}
function display2() {
  popupMenu.classList.toggle('show');
  console.log('listener Added')
}
for (let i = 0; i < disappearMenuOptions.length; i += 1) {
  disappearMenuOptions[i].addEventListener('click', display);
}
for (let j = 0; j < popupClick.length; j += 1) {
  popupClick[j].addEventListener('click', display2);
}
appearMenu.addEventListener('click', display);
disappearMenu.addEventListener('click', display);
