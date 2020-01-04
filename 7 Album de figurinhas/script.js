var marta = new Figura("Marta", "Brasil", "Meio campo", "./imgs/marta.jpg");
var cris = new Figura("Cristiane", "Brasil", "Atacante", "./imgs/cris.jpg");
var debinha = new Figura("Debinha", "Brasil", "Atacante", "./imgs/debinha.jpg");
var formiga = new Figura(
  "Formiga",
  "Brasil",
  "Meio campo",
  "./imgs/formiga.jpg"
);
var thais = new Figura("Thais", "Brasil", "Atacante", "./imgs/thais.jpg");

var colecaoFiguras = [];

colecaoFiguras.push(cris);
colecaoFiguras.push(marta);
colecaoFiguras.push(debinha);
colecaoFiguras.push(formiga);
colecaoFiguras.push(thais);

for (var i = 0; i < colecaoFiguras.length; i++) {
  colecaoFiguras[i].exibirFigurinha();
}
