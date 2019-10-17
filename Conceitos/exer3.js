/**
 * Exercicio 3: Busca em array
 * 
 * Extra: método find
 */

 // Maneira 1
function temHabilidadeIndexOf(skills) {
  const skill = "Javascript";

  if (skills.indexOf(skill) >= 0) {
    return console.log('Possui a habilidade');
  }

  return console.log('Não possui a habilidade');
}

// Maneira 2
function temHabilidade(skills) {
  const skill = skills.find(skill => skill === "Javascript");

  if (skill) {
    return console.log('Possui a habilidade');
  }

  return console.log('Não possui a habilidade');
}

// Array de entrada
const skills = ["Javascript", "ReactJS", " React Native"];


// Chamadas das funções

//temHabilidade(skills);

temHabilidadeIndexOf(skills);
