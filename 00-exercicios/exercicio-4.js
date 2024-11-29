function escrevaMeuNome(nome) {
  return `Seu nome é ${nome}`
};

function ehMaiorDeIdade(idade) {
  if (idade >= 18) {
    console.log(`${escrevaMeuNome("Samuel")} e é maior de idade`);
  } else {
    console.log(`${escrevaMeuNome("Samuel")} é menor de idade`);
  };
};

ehMaiorDeIdade(18);

