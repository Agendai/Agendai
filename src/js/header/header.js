const hamburguer =  document.getElementById('hamburguer');
const menu = document.querySelector('.menu');
const hero = document.getElementById('hero');
const line = document.querySelector('.line');
const navbar = document.querySelector('.listNav');

function toggle() {
  menu.classList.toggle('active');
  hero.classList.toggle('active');
  line.classList.toggle('active');
  navbar.classList.toggle('active');
};

hamburguer.addEventListener('click', toggle)
