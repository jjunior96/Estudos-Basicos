/**
 * 
 * Exercicio 2: Trabalhando arrays
 * 
 */

function retornaPares(x, y) {
  for( i = x; i <= y; i++ ) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}


const x = 2, y = 10;

retornaPares(x, y);