const usuarios = [
  {
    nome: 'Junior',
    habiliadades: ['Javascript', ' ReactJs', ' Redux' ]
  },
  {
    nome: 'Diego',
    habiliadades: ['ReactJs', ' Redux', ' React Native']
  }
];

usuarios.map(usuario => console.log(`O usuario ${usuario.nome} tem as habilidades ${usuario.habiliadades}`));