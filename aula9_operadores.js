// Operadores aritméticos (matemáticos): + , - , * , / , **, ++, --
let salário = 1000;
console.log(salário + salário);
console.log(salário - salário);
console.log(salário * salário);
console.log(salário / salário);
console.log(5 ** 5);

let idade = 18;
    // Icrementa por 1 (para os elementos serem atualizados direto no console, devem ser colocados à esquerda, caso estejam na direita, precisará colocar um console.log para imprimir o resultado atualizado):
console.log(++idade);





// Operadores de atribuição: = , += , -= , *= , /=
let valorCarro = 10000;

let total = valorCarro += valorCarro;
console.log(total);




// Operadores de comparação: === (Igualdade estrita - compara os valores e o tipo), == (Igualdade solta - compara apenas valores, caso os tipos sejam diferentes ele converte)
console.log(1 === 1, '1' === 1);
console.log(1 == 1, '1' == 1)




// Operadores ternários: < , > , ? (igual a true), : (igual a false) 
    // Cliente com mais de 100 pontos = premium, caso contrário = comum
let pontos = 100;
let tipoCliente = pontos > 100 ? 'premium' : 'comum';
console.log(tipoCliente);




// Operadores lógicos: and (&&), or (||), not (!)
    //Retorna true se dois operandos forem true
console.log(true && true);
    //Retorna true se apenas um dos operandos for ture
console.log(true || false);

    // Só pode recrutar se for de maior e tive carteira de trabalho
        let maiorDeIdade = false;
        let carteiraDeTrabalho = true;
        let podeRecrutar = maiorDeIdade && carteiraDeTrabalho;
        console.log(podeRecrutar);

    // Pode recrutar se apenas um requisito for true
        // let maiorDeIdade = false;
        // let carteiraDeTrabalho = true;
        // let podeRecrutar = maiorDeIdade || carteiraDeTrabalho;
        // console.log(podeRecrutar);

    // Usando NOT
        let candidatoRecusado = !podeRecrutar;
        console.log(candidatoRecusado);



// Operadores Bitwise: falsy , truth
    // Falsy: undefined, null, 0, false, '' (string vazia), NaN - not a number.
    // Truth: tudo o que não estiver na lista do falsy.