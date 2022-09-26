// Temos dois tipos de função
// Primeira, realiza uma tarefa e não retorna nada.

function dizerNome(){
    console.log('Ruanitro');
};

dizerNome()

// Segunda, realiza um cálculo ou operação e retorna algo.
function mutiplicarPorDois(valor){
    return valor* 2;
};

// console.log(mutiplicarPorDois(10));

let resultado = mutiplicarPorDois(8);
console.log(resultado);