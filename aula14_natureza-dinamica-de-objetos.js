// JS é dinâmica comparada a outras linguagens
// Podemos criar ou deletar propriedades de um objeto

const mouse = {
    cor : 'red',
    marca : 'dazz'
}

mouse.velocidade = 500;
mouse.trocarDPI = function(){
    console.log('Trocando DPI')
}

delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);