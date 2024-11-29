const precoCombustivel = 6.10;
const kmPorLitros = 10;
const distanciaViagemKm = 50;

const litrosConsumidos = distanciaViagemKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));