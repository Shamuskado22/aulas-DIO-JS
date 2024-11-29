const numero = 5

const isNumeroDivisivelPor5 = (numero % 5) === 0

if (numero === 0) {
  console.log("O Número é inválido")
} else if (isNumeroDivisivelPor5) {
  console.log("Sim")
} else {
  console.log("Não")
}
