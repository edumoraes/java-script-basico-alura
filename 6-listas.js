console.log('Trabalhando com listas');
const listaDeDestinos = new Array(
  `Manaus`,
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

console.log(listaDeDestinos);

listaDeDestinos.push(`Santarém`);

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);

console.log(listaDeDestinos);