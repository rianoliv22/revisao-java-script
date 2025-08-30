/* 
    Crie um programa que receba dois números
    e apresente a contagem de primeiro número até
    o segundo. Caso o segundo número seja maior
    a contagem deve ser decrescente.
    Trate também possíveis erros nos valores
    digitados.
    */

    let entrada = require('prompt-sync')();

    let n1 = Number(entrada('Digite o 1º número: '));
    let n2 = Number(entrada('Digite o 2º número: '));

    if (isNaN(n1) || isNaN(n2)) {
        console.log('Digite apenas números:');
    } else {
      console.log('Contagem: ');
      
      if(n1 < n2) {

    for(let n = n1; n <= n2; n++) {
      console.log(n);
      
    }

  } else if (n1 > n2) {
    for (let n = n1; n >= n2; n--) {
    console.log(n);
  }
}
};
