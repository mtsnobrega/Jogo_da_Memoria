const grid = document.querySelector('.grid'); // puxando o grid para dentro do js

const personagens = [
    'barbabranca','doffy','franky','katakuri','luffy','nami','robin','zoro',
    'barbabranca','doffy','franky','katakuri','luffy','nami','robin','zoro',
]

let pers1 = '';
let pers2 = '';

// criando uma função para criar as divs que vão conter as partes da frente e de traz das cartas
function createcard(personagem){
    const card = document.createElement('div');
    const frent = document.createElement('div');
    const atras = document.createElement('div');

    card.className = 'cards';
    frent.className = 'face frente';
    atras.className = 'face atras';

    frent.style.backgroundImage = `url(Imagens/${personagem}.jpg`;
    
    //criando ouvinte de evento, nesse caso um evento por clique 
    card.addEventListener('click', function(){
        if(pers1 == ''){
            card.style.transform = 'rotateY(180deg)'
            pers1 = card
        } else if (pers2 == ''){
            card.style.transform = 'rotateY(180deg)'
            pers2 = card
        }})
   

    card.appendChild(frent);
    card.appendChild(atras);

    //criando um novo atributo para as cartas, para que cada div criada receba o nome correspondente ao item do array 
    card.setAttribute('data-personagens',personagem);

   
    
    return card;
}


function cardschosen(){
    if (pers1 === pers2){
        alert('ola');
}}

function loadgame() {
    personagens.forEach(function(personagem) {
        const card = createcard(personagem);
        grid.appendChild(card);
    });
}
loadgame()

