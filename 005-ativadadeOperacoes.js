/*
Crie um programa que receba dois números e devolva como resultado a soma, subtração, multiplicação e a divisão do primeiro pelo segundo número.
*/

let entrada = require('prompt-sync')();

let n1 = entrada('Digite o 1º número: ');
let n2 = entrada('Digite o 2º número: ');

// let soma = parseInt(n1) + parseInt(n2);
// let subtração = parseInt(n1) - parseInt(n2);
// let multiplicação = parseInt(n1)* parseInt(n2);
// let divisão = parseInt(n1) / parseInt(n2);
//let resto = parseInt(n1) % parseInt(n2);

    let soma = parseFloat(n1) + parseFloat(n2);
    let subtração = parseFloat(n1) - parseFloat(n2);
    let multiplicação = parseFloat(n1)* parseFloat(n2);
    let divisão = parseFloat(n1) / parseFloat(n2);
    let resto = parseInt(n1) % parseInt(n2);


console.log(`Resultado ${n1} + ${n2} = ${soma}`);
console.log(`Resultado  ${n1} - ${n2} = ${subtração}`);
console.log(`Resultado  ${n1} * ${n2} = ${multiplicação}`);
console.log(`Resultado  ${n1} / ${n2} = ${divisão.toFixed(2)}`);
console.log(`Inteiro da divisão ${n1} / ${n2} = ${parseInt(divisão)}`);
console.log(`Resto da divisão ${n1} % ${n2} = ${resto}`);

entrada('Pressione "ENTER" para encerrar o programa!');

console.log('Programa encerrado com sucessO!!!');
