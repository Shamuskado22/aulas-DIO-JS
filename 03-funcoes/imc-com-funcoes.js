function calcularImc(peso, altura) {
  return peso / (altura ** 2)
};

function classificarImc(imc) {
  
  if (imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    return 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    return 'Acima do peso';
  } else if (imc >= 30 && imc < 40) {
    return 'Obeso';
  } else {
    return 'Obesidade grave';
  };
};

// Main
(function () {
  const peso = 90.4;
  const altura = 1.82;
  const imc = calcularImc(peso, altura);
  
  console.log(imc.toFixed(2));
  console.log(classificarImc(imc))
})()

