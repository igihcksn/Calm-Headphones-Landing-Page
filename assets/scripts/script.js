const BRAND_LISTS = [
  {
      name: 'AKG',
      src: './assets/images/audio/akg.png',
  },
  {
      name: 'Audio Technica',
      src: './assets/images/audio/at.webp',
  },
  {
      name: 'Byerdynamic',
      src: './assets/images/audio/beyerdynamic.png',
  },
  {
      name: 'Bang & Oluesen',
      src: './assets/images/audio/bno.png',
  },
  {
      name: 'Harman Kardon',
      src: './assets/images/audio/harmankardon.png',
  },
  {
      name: 'Sennheiser',
      src: './assets/images/audio/sennheiser.png',
  },
  {
      name: 'Skull Candy',
      src: './assets/images/audio/skullcandy.png',
  },
  {
      name: 'Sony',
      src: './assets/images/audio/sony.png',
  },
];

const drawerButton = document.querySelector('#drawer-button');
const drawerNavigation = document.querySelector('#main-nav');
const brandSection = document.querySelector('.brand-container');

drawerButton.addEventListener('click', () => {
  drawerNavigation.classList.toggle('open');
});

document.body.addEventListener('click', (event) => {
  if (!drawerNavigation.contains(event.target) && !drawerButton.contains(event.target)) {
    drawerNavigation.classList.remove('open');
  }
});

BRAND_LISTS.forEach((brand) => {
  const newElement = document.createElement('div');
  newElement.setAttribute('class', 'brand-item');
  newElement.innerHTML = `
    <img src="${brand.src}" alt="${brand.name}">
  `;
  brandSection.appendChild(newElement);
})
