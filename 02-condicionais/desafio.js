const precoEtanol = 4.04;
const precoGasolina = 6.10;
const tipoCombustivel = 'Etanol';
const gastoMedioEmKm = 10;
const distanciaDaViagem = 50;

const litrosConsumidos = distanciaDaViagem / gastoMedioEmKm

if (tipoCombustivel === 'Etanol') {
  const valorGasto = precoEtanol * litrosConsumidos
  console.log(valorGasto.toFixed(2))
} else {
  const valorGasto = precoGasolina * litrosConsumidos
  console.log(valorGasto.toFixed(2));
}
