const hero = document.getElementById('hero');
const hamburguerFix =  document.getElementById('hamburguer');


function toggle() {
  hero.classList.toggle('active');
}

hamburguerFix.addEventListener('click', toggle)
