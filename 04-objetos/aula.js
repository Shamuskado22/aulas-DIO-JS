class Pessoa {
  nome;
  idade;
  altura;
  anoDeNascimento;

  constructor(nome, idade, altura, anoDeNascimento) {
    const dataAtual = new Date();

    this.nome = nome
    this.idade = idade
    this.altura = altura
    anoDeNascimento = dataAtual.getFullYear() - this.idade
    this.anoDeNascimento = anoDeNascimento
  };

  descrever() {
    console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade}, nasci no ano de ${this.anoDeNascimento} e minha altura é ${this.altura}`);
  };
};

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
  }
}

const samuel = new Pessoa('Samuel', 29, 1.82)

const almeida = new Pessoa('Almeida', 30, 1.85)

compararPessoas(samuel, almeida)

samuel.descrever()
almeida.descrever()
