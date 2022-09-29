// // Arrays são um conjunto de dados que podem ser acessados por um índice

// let familiaIdade = ['Alice',9,'Ruan',18,'Dilce',44,'Vande',55];

// console.log(familiaIdade);   
// console.log(familiaIdade[0]);  
// console.log(familiaIdade[1]);  
// console.log(familiaIdade[2]);  
// console.log(familiaIdade[3]);  

// // Quantos elementos tem o array:
// console.log(familiaIdade.length);

let dadosAmigo = ['Allan',22,'Mafra'];
//console.log(dadosAmigo);


// Add novo elemento
    // Com arrays declarados como const, só conseguimos adicionar ou remover elementos de uma com métodos, mas isso não impede de alterar os valores.
const numeros = [1,2,3];
    //inserir dados no inicio do array
        numeros.unshift(0);
        console.log(numeros);
    //inserir no meio de elementos
        numeros.splice(1,0,'a');
        console.log(numeros);
    //inserir no final
        numeros.push(5);
        console.log(numeros);


// Encontrar elementos (primitivos: undefined, null, boolean, number, string, symbol)
const numeros2 = [1,2,3,1,4];
    //indica qual o numero do indice passado como parametro
    console.log(numeros2.indexOf(2));
    //indica o indice onde à números repetidos
    console.log(numeros2.lastIndexOf(1));
    //também podemos descobrir se existe valores usando o indexOf ou o includes
    console.log(numeros2.indexOf(2) !== -1);
    console.log(numeros2.includes(2));


// Encontra elementos (referencia: objetos)
const marcas = [
    {id: 1 , nome: 'a'},
    {id: 2 , nome: 'b'}
]

const marca = marcas.find(function(marca){
    return marca.nome === 'a';   
});
console.log(marca);


// Arrow functions: são formas mais curtas de declarar funções e corpos de funções
console.log(marcas.find((marca) => marca.nome === 'a'));

// Remover elemento
const numeros3 = [1,2,3,4,5,6,7]
    //remover no final
    const ultimo = numeros3.pop();
    console.log(ultimo)
    console.log(numeros3)
    //inicio
    const primeiro = numeros3.shift();
    console.log(primeiro);
    console.log(numeros3);
    //meio
    const meio = numeros3.splice(2,1)
    console.log(meio);
    console.log(numeros3)

// Esvaziando um array
let array = [1,1,1];
let array2 = array;
    //opção 1
    array = [];
    console.log(array2);
    //opção 2
    array.length = 0;
    console.log(array2);
    //opção 3
    array.splice(0,array.length())
    //opção 4
    while(numeros.length > 0){
        array.pop()
    }


// Dividir elementos 
// Dividir arrays
    const dividido = combinado.slice(1,3);
    console.log(dividido);
// Combinar arrays
    const primeiroArray = [1,2,3];
    const segundoArray = [1,2,3,4];
    const combinado = primeiroArray.concat(segundoArray); 
    console.log(combinado);