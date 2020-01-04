var gravidadeTerra = 9.8;
var gravidadeMarte = 3.7;
var gravidadeJupiter = 24.8;

var peso = prompt("Digite o peso do usuário na Terra:");
var planeta = prompt(
  "Deseja saber o peso relativo a qual planeta (escolha entre Marte e Júpiter)?"
);
var pesoFinal;

// fluxo condicional
if (planeta == "marte") {
  pesoFinal = parseInt((peso / gravidadeTerra) * gravidadeMarte);
  document.write("O peso deste objeto em Marte é: " + pesoFinal);
} else if (planeta == "jupiter") {
  pesoFinal = parseInt((peso / gravidadeTerra) * gravidadeJupiter);
  document.write("O peso deste objeto em Júpiter é: " + pesoFinal);
} else {
  document.write("Não posso calcular o peso neste planeta.");
}
