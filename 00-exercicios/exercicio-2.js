const peso = 70;
const altura = 1.8;
const imc = peso / (altura ** 2);

console.log(imc.toFixed(2));

if (imc < 18.5) {
  console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
  console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
  console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
  console.log('Obeso');
} else {
  console.log('Obesidade grave');
};