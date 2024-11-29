const nota1 = 7;
const nota2 = 8;
const nota3 = 8;
const notaMedia = (nota1 + nota2 + nota3) / 3;

console.log(notaMedia.toFixed(1));

if (notaMedia < 5) {
  console.log('Reprovação');
} else if (notaMedia >= 5 && notaMedia <=7) {
  console.log('Recuperação');
} else {
  console.log('Passou de semestre');
};