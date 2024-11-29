class Pessoa {
  nome;
  idade;
  altura;
  anoDeNascimento;
  
  constructor(nome, idade, altura, anoDeNascimento) {
    const dataAtual = new Date()
    
    this.nome = 'teste'
    this.idade = 20
    this.altura = 1.50
    this.anoDeNascimento = dataAtual.getFullYear() - this.idade
  }

  descrever() {
    console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade}, nasci no ano de ${this.anoDeNascimento} e minha altura é ${this.altura}`)
  }
}

const samuel = new Pessoa('Samuel', 29, 1.82)


console.log(samuel)

// const pessoa = {
//   nome: 'Samuel A. de Oliveira',
//   idade: 29,
//   descrever: function () {
//     console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e minha altura é ${this.altura}`)
//   }
// }
// pessoa.altura = 1.82


// pessoa['idade'] = 30
// pessoa.idade = 30

// samuel.descrever()

// delete pessoa.nome

// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa.altura)
// console.log(pessoa)
