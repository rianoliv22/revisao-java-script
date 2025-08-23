let entrada= require('prompt-sync')();

let nome = entrada('Digite seu nome: ');
let idade = entrada('Digite sua idade: ');

let validaIdade = isNaN(idade)

if (validaIdade) {
    console.log(`${nome} Insira um valor numérico na idade!`);
}   else{
    if(idade > 18){
        console.log('Bem-vindo ao site!!');
    }  else if(idade < 18) {
        console.log('Você não tem idade para acessar o site!!');
    }   else{
        console.log('Ok você tem 18 anos.');
    }
}

if (nome.length < 5) {
    console.log('Seu nome é muito curto');
}

const maioridade = idade >=18 ? 'maior' : 'menor'; //ternário
console.log(`${nome} Descobri que você é ${maioridade} de idade.`);