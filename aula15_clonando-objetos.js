const celular = {
    marcaCelular : 'Xiaomi'
,    tamanhoTela : {
        horizontal : 155,
        vertival : 75
    },
    capacidadeBateria : 5000,
    ligar(){
        console.log('Fazendo ligação...')
    }
}

// Método que copia os objetos, recebe um parametro para onde será copiado e um de onde será copiado
// Podemos adicionar novas propriedades ao novoObjeto
const novoObjeto = Object.assign({
    bateria : 5000
},celular);
console.log(novoObjeto);


// Outra forma seria usar o spread ({...}), os três pontos.
const objeto2 = {...celular};
console.log(objeto2);