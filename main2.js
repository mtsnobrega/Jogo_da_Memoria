const grid = document.querySelector('.grid'); // puxando o grid para dentro do js

    let pers1 = '';
    let pers2 = '';

const personagens = [
    'barbabranca','doffy','franky','katakuri','luffy','nami','robin','zoro',
    'barbabranca','doffy','franky','katakuri','luffy','nami','robin','zoro',
]

const embaralhada = personagens.sort(() => Math.random() - 0.5); // embaralhando o array 

// criando uma função para criar as divs que vão conter as partes da frente e de traz das cartas
function criarcarta(personagem){
    const carta = document.createElement('div');
    const frente = document.createElement('div');
    const atras = document.createElement('div');

    carta.className = 'cards';
    frente.className = 'face frente';
    atras.className = 'face atras';

    frente.style.backgroundImage = `url(Imagens/${personagem}.jpg)`; 
    
    carta.addEventListener('click', revelar); //criando ouvinte de evento, nesse caso um evento por clique 

    carta.appendChild(frente); //colando as divs filhos dentro da div pai 
    carta.appendChild(atras);

    //criando um novo atributo para as cartas, para que cada div criada receba o nome correspondente ao item do array 
    carta.setAttribute('data-personagens',personagem);
    
    return carta;
}

function revelar(evento){
    const target = evento.target 
    if (target.parentNode.className.includes('revelar')) {
        return;
      } else if (pers1 === '') {
        target.parentNode.classList.add('revelar');
        pers1 = target.parentNode;
      } else if (pers2 === '') {
        target.parentNode.classList.add('revelar');
        pers2 = target.parentNode;
    
        comparar();
    }}

let paresEncontrados = 0;
const totalPares = personagens.length / 2;

function comparar(){
    const carta1 = pers1.getAttribute('data-personagens');
    const carta2 = pers2.getAttribute('data-personagens');
    
    if (carta1 === carta2){
        pers1.firstChild.classList.add('efeito');
        pers2.firstChild.classList.add('efeito');
        pers1 = '';
        pers2 = '';
        pontuação()
        checkEndGame();
    } else {
        setTimeout(() => {
            pers1.classList.remove('revelar');
            pers2.classList.remove('revelar');
            pers1 = '';
            pers2 = '';
        }, 800);
  }
}

let segundos = 0;
let minutos = 0;
let horas = 0;

function atualizarCronometro() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
}

  const cronometro = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  document.getElementById('cronometro').innerText = cronometro;
}

function iniciarCronometro() {
  setInterval(atualizarCronometro, 1000); // Atualiza a cada 1 segundo (1000ms)
}
function loadgame(){
    embaralhada.forEach(function(personagem) {
        const card = criarcarta(personagem);
        grid.appendChild(card);
    });
}

function pontuação(){
    pontos = 0
    for(let x = 12;carta1 === carta2; pontos = pontos + 10)
    var resultado = document.getElementById('pontu');
    resultado.innerHTML = (pontos);

}
loadgame()

