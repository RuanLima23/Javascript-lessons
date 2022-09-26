// Primeiramente, o que são objetos?
// Chave-Valor (key-value pair)

let marcaCelular = 'XIAOMI';
let tamanhoTelaHorizontal = 155;
let tamanhoTelaVertical = 75;
let capacidadeBateria = 5000;

// Podemos colocar funções dentro de objetos, portanto onjetos não se limitam apenas a propriedades
const celular = {
    marcaCelular : 'XIAOMI',
    tamanhoTela : {
        horizontal : 155,
        vertival : 75
    },
    capacidadeBateria : 5000,
    ligar : function(){
        console.log('Fazendo ligação...')
    }
}

//celular.capacidadeBateria = 2500;
//console.log(celular.capacidadeBateria);
//celular.ligar();

// Factory functions (funções de fábrica)
// A factory função vai encapsular informações dentro de métodos que criam objetos

function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela : {
            horizontal : 155,
            vertival : 75
        },
        capacidadeBateria : 5000,
        ligar(){
            console.log('Fazendo ligação...')
        }
    }
}

const celular1 = criarCelular('Xiaomi',5.5,5000);
console.log(celular1);