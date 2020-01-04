class Figura {
  constructor(nome, pais, posicao, urlImagem) {
    this.nome = nome;
    this.pais = pais;
    this.posicao = posicao;

    this.imagem = new Image(320, 400);
    this.imagem.src = urlImagem;
  }

  falar() {
    alert("Meu nome é: " + this.nome);
  }

  exibirFigurinha() {
    document.body.appendChild(this.imagem); // adicionando um filho no DOM
    document.write("<br/> Nome: " + this.nome + "<br/>");
    document.write("Posição: " + this.posicao + "<br/>");
    document.write("País: " + this.pais + "<br/>");
  }
}
