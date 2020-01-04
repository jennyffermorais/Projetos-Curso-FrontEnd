var canvas = document.getElementById("meuCanvas");
var papel = canvas.getContext("2d");

var fundo = {
  url: "./img/fundo.png"
};

var vaca = {
  url: "./img/vaca.png"
};

fundo.imagem = new Image();
fundo.imagem.src = fundo.url;
vaca.imagem = new Image();
vaca.imagem.src = vaca.url;

fundo.imagem.addEventListener("load", carregaFundo);
//vaca.imagem.addEventListener("load", carregaVaca);

function carregaFundo() {
  papel.drawImage(fundo.imagem, 0, 0);
  carregaVaca();
}

function carregaVaca() {
  var numeroVacas = numeroAleatorio(2, 10);

  for (var i = 0; i < numeroVacas; i++) {
    var xAleatorio = numeroAleatorio(100, 400);
    var yAleatorio = numeroAleatorio(100, 400);
    papel.drawImage(vaca.imagem, xAleatorio, yAleatorio);
  }
}

function numeroAleatorio(x, y) {
  return Math.floor(Math.random() * (y - x) + 1) + x;
}
