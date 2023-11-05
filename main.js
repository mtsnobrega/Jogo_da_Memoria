const grid = document.querySelector('.grid');





const personagens = [
    'barbabranca','doffy','franky','katakuri','luffy','nami','robin','zoro',
    'barbabranca','doffy','franky','katakuri','luffy','nami','robin','zoro',
]

let primeiracarta = '';
let segundacarta = '';
   
function createcard(personagem){
const card = document.createElement('div');
const frent = document.createElement('div');
const atras = document.createElement('div');

card.className = 'cards';
frent.className = 'face frente';
atras.className = 'face atras';

card.appendChild(frent);
card.appendChild(atras);

frent.style.backgroundImage = `url(Imagens/${personagem}.jpg)`;

card.addEventListener('click',function(){
    if(primeiracarta == ""){
        card.style.transform ='rotateY(180deg)';
        primeiracarta = card;
    } else if (segundacarta ==""){
        card.style.transform ='rotateY(180deg)';
        segundacarta = card

    }
});

return card;
}

const loadgame = () => {
    personagens.forEach((personagem) => {
        const card = createcard(personagem);
        grid.appendChild(card);

    })
}




loadgame()




function revelar({ target }) {
    if (target.parentNode.className.includes('revelar')) {
      return;
    }
  
    if (pers1 === '') {
      target.parentNode.classList.add('revelar');
      pers1 = target.parentNode;
    } else if (pers2 === '') {
      target.parentNode.classList.add('revelar');
      pers2 = target.parentNode;
      comparar();
    }
  }
  
  function comparar() {
    const carta1 = pers1.getAttribute('data-personagens');
    const carta2 = pers2.getAttribute('data-personagens');
    if (carta1 === carta2) {
      pers1.firstChild.classList.add('efeito');
      pers2.firstChild.classList add('efeito');
      pers1 = '';
      pers2 = '';
    } else {
      setTimeout(function () {
        pers1.classList.remove('revelar');
        pers2.classList.remove('revelar');
        pers1 = '';
        pers2 = '';
      }, 500);
    }
  }







