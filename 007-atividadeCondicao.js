/* crie um programa de um estabelecimento que receba dados como
o nome, a idade e se a pessoa é amigo do dono.
Retorne uma mensagem de acordo com as validações abaixo:
-Se a pessoa ter mais de 18 anos o acesso ao local será liberado.
- pessoas com menos de 18 anos não acessam o local.
-Amigos do dono podem acessar o local independente da idade.
- Caso a pessoa tenha mais de 18 anos e seja amigo do dono, ganhara uma bebida.
*/

let entrada= require('prompt-sync')();

let nome = entrada("Digite seu nome:");
let idade = entrada("Digite sua idade:");
let amigoDoDono = entrada("Você é amigo do dono? (sim/não)");

if (amigoDoDono === "sim") {
    if (idade > 18) {
        console.log(`Olá ${nome}, você pode entrar e ganhou uma bebida!`);
    } else {
        console.log(`Olá ${nome}, você pode entrar porque é amigo do dono!`);
    }
} else {
    if (idade >= 18) {
        console.log(`Olá ${nome}, você pode entrar!`);
    } else {
        console.log(` ${nome},Você é igual o corinthias, Acasso Negado!!.`);
    }
}
