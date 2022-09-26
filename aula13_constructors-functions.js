// A função construtor faz a mesma coisa que a função de fábrica, porém de fprma diferente

//camelCase = variável começa com a primeria letra minúscola e o resto maiúscula, por exemplo: umDoisTres...
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

// Pascal case = variável começa com todas as letras maiúsculas, por exemplo: UmDoisTres...
function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    //this: referencia o objeto que está sendo manipulado
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log('Fazendo ligação...')
    }
}

const celular = new Celular('Xiaomi,',5.5,5000);
console.log(celular);