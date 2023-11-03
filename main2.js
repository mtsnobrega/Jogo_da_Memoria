const grid = document.querySelector('.grid'); // puxando o grid para dentro do js

const personagens = [
    'barbabranca','doffy','franky','katakuri','luffy','nami','robin','zoro',
    'barbabranca','doffy','franky','katakuri','luffy','nami','robin','zoro',
]

const embaralhada = personagens.sort(() => Math.random() - 0.5);

let pers1 = '';
let pers2 = '';

const revelar = ({target}) => { 
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
    
    }}

const comparar = () => {
    const carta1 = pers1.getAttribute('data-personagens');
    const carta2 = pers2.getAttribute('data-personagens');
    if (carta1 === carta2){
        pers1.firstChild.classList.add('efeito');
        pers2.firstChild.classList.add('efeito');
        pers1 = '';
        pers2 = '';
    } else {
        setTimeout(() => {
            pers1.classList.remove('revelar');
            pers2.classList.remove('revelar');
            pers1 = '';
            pers2 = '';
        }, 500);
  }

}
    







// criando uma função para criar as divs que vão conter as partes da frente e de traz das cartas
function criarcarta(personagem){
    const card = document.createElement('div');
    const frent = document.createElement('div');
    const atras = document.createElement('div');

    card.className = 'cards';
    frent.className = 'face frente';
    atras.className = 'face atras';

    frent.style.backgroundImage = `url(Imagens/${personagem}.jpg`;
    
    //criando ouvinte de evento, nesse caso um evento por clique 
    
    card.addEventListener('click', revelar);

      
        
   

    card.appendChild(frent);
    card.appendChild(atras);

    //criando um novo atributo para as cartas, para que cada div criada receba o nome correspondente ao item do array 
    card.setAttribute('data-personagens',personagem);

   
    
    return card;
}



function loadgame() {
    embaralhada.forEach(function(personagem) {
        const card = criarcarta(personagem);
        grid.appendChild(card);
    });
}
loadgame()

