const precoEtiqueta = 100
const formaPagamento = 4

if (formaPagamento === 1) {
  console.log(precoEtiqueta - (precoEtiqueta * 0.1))
} else if (formaPagamento === 2) {
  console.log(precoEtiqueta - (precoEtiqueta * 0.15))
} else if (formaPagamento === 3) {
  console.log(precoEtiqueta)
} else if (formaPagamento === 4){
  console.log(precoEtiqueta + (precoEtiqueta * 0.1))
} else {
  console.log('Forma de pagamento não encontrada')
}