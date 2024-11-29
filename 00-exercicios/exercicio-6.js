class Carro {
  marca;
  cor;
  combustivelPorKm;

  constructor(marca, cor, combustivelPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.combustivelPorKm = combustivelPorKm
  };

  valorGasto(distanciaDaViagem, precoCombustivel) {
    return (distanciaDaViagem * this.combustivelPorKm) * precoCombustivel
  };
};

const monza = new Carro('Chevrolet', 'Vinho', 1 / 12);

const valorGasto = monza.valorGasto(50, 5.60);

console.log(`O valor gasto do percurso é de R$${valorGasto.toFixed(2)}`);