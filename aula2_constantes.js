//Usamos o LET em variáveis que podem a vir ser alteradas, na maioria dos casos usamos o CONST para variáveis que não são alteradas, sendo visto como boa prática.

let valorIngresso1 = 20;
valorIngresso1 = 25;
console.log(valorIngresso1);

// const: as variáveis de const não podem ser atualizadas nem declaradas novamente, ou seja, constante = não muda.
const valorIngresso2 = 30;
// valorIngresso2 = 35; (não pode)
console.log(valorIngresso2);