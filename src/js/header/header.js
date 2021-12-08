const hamburguer =  document.getElementById('hamburguer');
const menu = document.querySelector('.menu');
const line = document.querySelector('.line');
const navbar = document.querySelector('.navbar');
const listNav = document.querySelector('.listNav');

function toggle() {
  menu.classList.toggle('active');
  line.classList.toggle('active');
  navbar.classList.toggle('active');
  listNav.classList.toggle('active');
};

hamburguer.addEventListener('click', toggle)
