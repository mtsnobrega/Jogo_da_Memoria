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