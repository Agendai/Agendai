const hamburguer =  document.getElementById('hamburguer');
const menu = document.querySelector('.menu');
const hero = document.getElementById('hero');
const line = document.querySelector('.line');

function toggle() {
  menu.classList.toggle('active');
  hero.classList.toggle('active');
  line.classList.toggle('active');
};

hamburguer.addEventListener('click', toggle)