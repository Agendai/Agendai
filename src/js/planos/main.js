const sessionCards = document.querySelector('.card-container');
const cardEl = document.querySelector('.card');
const listBenefits = document.querySelector('.benefits-list');
const createLi = document.createElement('li');

const cards = [
  {
    plano: 'Básico',
    preco: '30,00R$ por mês',
    beneficios: {
    li1: 'Sistema de agendamento',
    li2: 'Hotsite personalizável',
    li3: '2 cadastros de funcionário',
    li4: 'Limite de 10 fotos de serviços;',
    li5: 'x',
    li6: 'x',
    }
  },
  {
    plano: 'Pro',
    preco: '50,00R$ mês',
    beneficios: {
      li1: 'Sistema de agendamento',
      li2: 'Hotsite personalizável',
      li3: '5 cadastros de funcionário',
      li4: 'Limite de 20 fotos de serviços',
      li5: 'Destaque nos Recomendados',
      li6: 'Dashboard de finanças',
    }
  },
];

console.log(cards[0].beneficios)


cards.map( card => {
  const cardClone = cardEl.cloneNode(true);
  cardClone.querySelector('.plan').innerHTML = card.plano;
  cardClone.querySelector('.price').innerHTML = card.preco;
  cardClone.querySelector('.li1').innerHTML = createLi.innerHTML = card.beneficios.li1;
  cardClone.querySelector('.li2').innerHTML = createLi.innerHTML = card.beneficios.li2;
  cardClone.querySelector('.li3').innerHTML = createLi.innerHTML = card.beneficios.li3;
  cardClone.querySelector('.li4').innerHTML = createLi.innerHTML = card.beneficios.li4;
  cardClone.querySelector('.li5').innerHTML = createLi.innerHTML = card.beneficios.li5;
  cardClone.querySelector('.li6').innerHTML = createLi.innerHTML = card.beneficios.li6;

  sessionCards.appendChild(cardClone);
  
});
