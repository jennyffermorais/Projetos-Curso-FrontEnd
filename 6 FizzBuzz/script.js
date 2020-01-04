var botao = document.getElementById("botao");

botao.addEventListener("click", executaFizzBuzz);

function executaFizzBuzz() {
  var numeroIteracoes = document.getElementById("numeroIteracoes").value;
  var resultado = document.getElementById("resultado");

  var numero = 1;

  while (numero <= numeroIteracoes) {
    //se o nº é divisível por 3 e 5 mostrar FizzBuzz
    if ((numero % 5 == 0) & (numero % 3 == 0)) {
      resultado.innerHTML = "FizzBuzz";

      //se o nº é divisível por 3 mostrar Fizz
    } else if (numero % 3 == 0) {
      resultado.innerHTML = "Fizz";

      //se o nº é divisível por 5 mostrar Buzz
    } else if (numero % 5 == 0) {
      resultado.innerHTML = "Buzz";

      //se não for divisível por nenhum dos números mostrar o número
    } else {
      resultado.innerHTML = numero;
    }
    numero++;
  }
}
