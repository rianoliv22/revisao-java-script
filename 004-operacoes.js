let entrada = require('prompt-sync')();

let n1 = entrada('Digite o 1º número: ');
let n2 = entrada('Digite o 2º número: ');

let soma = n1 + n2;

console.log(`Resultado = ${soma}`);

entrada('Pressione "ENTER" para encerrar o programa!');

console.log('Programa encerrado com sucessO!!!')