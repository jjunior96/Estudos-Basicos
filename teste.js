const Pessoas = [
  {
    nome: 'Igor Rodrigues',
    idade:25
  }, 
  {
    nome: "Junior Alves",
    idade: 22 
  }
];


function buscaNome(Pessoa) {
  for(i=0; i < Pessoas.length; i++) {
    console.log(Pessoa[i].nome);
  }
}

buscaNome(Pessoas);


