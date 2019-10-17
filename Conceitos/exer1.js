/**
 * Exercicio 1: Functions e Objetos
 * 
 * Extra: Desestruturação
 */

const endereco = {
  rua: 'Rua dos pinheiro', 
  numero: 1293,
  bairro: 'Centro',
  cidade: 'São Paulo',
  uf: 'SP'
};

function retornaEndereco(endereco) {
  const { rua, numero, bairro, cidade, uf } = endereco;

  console.log(`O usuario mora em ${cidade} / ${uf}, no bairro ${bairro}, na rua ${rua}, numero ${numero}`);
}

retornaEndereco(endereco);