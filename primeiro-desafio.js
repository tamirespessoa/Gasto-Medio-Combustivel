const precoCombustivel = 4.79;
const kmPorLitros = 12;
const distanciaEmKM = 1580;

const litrosConsumidos = distanciaEmKM / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2))

