/* 
    Continuando a implementação do exemplo 11,
    faça com que o programa só aceite uma senha
    errada três vezes, após a terceira tentativa
    errada o sistema debe apresentar a mensagem
    informando que o usuario esta bloqueado
    quando a senha for digitada corretamente,
    a mensagem 'Bem vindo ao sistema de login' 
    deve ser apresentada. 
    */

 let entrada = require('prompt-sync')();

        const senhaCorreta = '1234';
            let tentativas = 0;
            let senhaDigitada;
            let acesso = false;

                do {
                    senhaDigitada = entrada('Digite a senha: ');
                    tentativas++;

                    if (senhaDigitada === senhaCorreta) {
                        
                    acesso = true;
                           console.log("✅ Bem-vindo ao sistema de login!");
                                 break;
                             } else {
                         console.log("❌ Senha incorreta.");
                  }

             } while (tentativas < 3);

             if (!acesso && tentativas === 3) {
                console.log("🚫 Usuário bloqueado. Tentativas excedidas."); 
            }