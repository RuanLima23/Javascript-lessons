// Função = verbo + substantivo. Exemplos: resetaCor, transformaTamanho, alteraTamanho.
// Usamos function para representar uma função.

// let corSite = 'azul';

// function resetaCor(cor,tonalidade){
//     corSite = cor + ' ' + tonalidade;
// };

// console.log(corSite);
// resetaCor('vermelho','escuro');
// console.log(corSite);



let email = 'fake@gmail.com';

function alteraEmail(novo_email,senha){
    email = novo_email + ' | ' + senha;
};

console.log(email);
alteraEmail('original@gmail.com','123');
console.log(email);