function experiencia(anos) {
  if(anos >= 0 && anos < 2) {
    return console.log('Iniciante');
  }

  if(anos >= 2 && anos < 4) {
    return console.log('Intermediario');
  }

  if(anos >= 4 && anos < 7) {
    return console.log('Avançado');
  }

  if(anos >= 7) {
    return console.log('Jedi Master');
  }
}

const anosEstudo = 7;

experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master