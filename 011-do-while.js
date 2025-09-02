let entrada = require('prompt-sync')();

const senha = '1234';
let senhaDigitada = '';

do {
    senhaDigitada = entrada ('Digite a senha para acessar o sistema: ');
} while (senhaDigitada !== senha);


console.log('Bem Vindo ao sistema de login!');
