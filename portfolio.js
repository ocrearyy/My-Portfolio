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
]
;


const popupMenu = document.createElement('div');
const closeIcon = document.createElement('img');
const popupH2 = document.createElement('h2');
const popupUl = document.createElement('ul');
const popupLi1 = document.createElement('li');
const popupLi2 = document.createElement('li');
const popupLi3 = document.createElement('li');
const popupImageContainer = document.createElement('div');
const popupImage = document.createElement('img');
const popupParagraph = document.createElement('p');
const langContainer = document.createElement('div');
const popuplanguages = document.createElement('ul');
const popupLanguagesLi1 = document.createElement('li');
const popupLanguagesLi2 = document.createElement('li');
const popupLanguagesLi3 = document.createElement('li');
const popupButtonContainer1 = document.createElement('div');
const popupButton1 = document.createElement('button');
const popupA1 = document.createElement('a');
const popupSpan1 = document.createElement('span');
const popupButtonImage1 = document.createElement('img');
const popupButton2 = document.createElement('button');
const popupA2 = document.createElement('a');
const popupSpan2 = document.createElement('span');
const popupButtonImage2 = document.createElement('img');

popupMenu.className = 'popup-default';
closeIcon.className = 'x-display';
popupH2.className = 'tonic';
popupUl.className = 'sub-Points';
popupLi1.className = 'canopy';
popupLi2.className = 'sub-Text';
popupLi3.className = 'sub-Text';
popupImageContainer.className = 'desktop-Img-Works';
popupImage.className = 'snapshoot';
popupParagraph.className = 'popup-paragraph';
langContainer.className = 'lang';
popuplanguages.className = 'languages';
popupLanguagesLi1.className = 'languages-List';
popupLanguagesLi2.className = 'languages-List';
popupLanguagesLi3.className = 'languages-List';
popupButtonContainer1.className = 'popup-buttons';
popupButton1.className = 'see-live';
popupA1.className = 'live-link';
popupSpan1.className = 'span1';
popupButtonImage1.className = '';
popupButton2.className = 'see-source';
popupA2.className = 'source-link';
popupSpan2.className = '';
popupButtonImage2.className = '';

document.body.appendChild(popupMenu);
popupMenu.appendChild(closeIcon);
popupMenu.appendChild(popupH2);
popupMenu.appendChild(popupUl);
popupUl.appendChild(popupLi1);
popupUl.appendChild(popupLi2);
popupUl.appendChild(popupLi3);
popupMenu.appendChild(popupImageContainer);
popupImageContainer.appendChild(popupImage);
popupMenu.appendChild(popupParagraph);
popupMenu.appendChild(langContainer);
popupMenu.appendChild(popuplanguages);
popuplanguages.appendChild(popupLanguagesLi1);
popuplanguages.appendChild(popupLanguagesLi2);
popuplanguages.appendChild(popupLanguagesLi3);
popupMenu.appendChild(popupButtonContainer1);
popupButtonContainer1.appendChild(popupButton1);
popupButtonContainer1.appendChild(popupA1);
popupMenu.appendChild(popupButton2);
popupButton2.appendChild(popupA2);
popupButton2.appendChild(popupSpan1);


popupH2.textContent = portfolio[0].name;
popupLi1.textContent = portfolio[0].information1;
popupLi2.textContent = portfolio[0].information2;
popupLi3.textContent = portfolio[0].information3;
popupImage.src = portfolio[0].img;
popupParagraph.textContent = portfolio[0].description;
popupLanguagesLi1.textContent = portfolio[0].technolgies1;
popupLanguagesLi2.textContent = portfolio[0].technologies2;
popupLanguagesLi3.textContent = portfolio[0].technologies3;
popupA1.textContent = portfolio[0].seeLive;
popupA2.textContent = portfolio[0].seeSource;
popupSpan1.textContent = portfolio[0].span1;


{/* <div class="popup-default">
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
        <span class="live">See Live</span>
        <img src="images/kittyproject.svg" alt="kittyicon"></a>
    </button>
    <button class="see-source">
      <a class="source-link" href="https://github.com/oshanedesign/My-Portfolio">
        <span >See Source</span>
        <img src="images/symbolproject.svg" alt="symbolicon"></a>
    </button>
  </div>
 */}

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
closeIcon.addEventListener('click', display2);


