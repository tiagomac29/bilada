var musicaOriginal = "musica bilada.mp3";
var novaMusica = "electrobilada.mp3";
var musicaAtual = musicaOriginal; 
function trocarmusica() {
  var audio = document.getElementById('musicasbilada');
  if (musicaAtual === musicaOriginal) {
    audio.src = novaMusica; // Troca para a nova música
    musicaAtual = novaMusica;
  } else {
    audio.src = musicaOriginal; // Volta para a música original
    musicaAtual = musicaOriginal;
  }
  audio.play();
}

function trocarpaisagem(){

const trocarpaisagemButton = document.getElementById('trocarpaisagem');
const galaxy = document.getElementById('galaxy');

trocarpaisagemButton.addEventListener('click', () => {
    if (galaxy.classList.contains('visible')) {
      galaxy.classList.remove('visible');
    } else {
      galaxy.classList.add('visible');
    }
});
}

function trocarpaisagem(){
  var x = document.getElementById("espaco");

  if(x.style.display === "block") {
     x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}