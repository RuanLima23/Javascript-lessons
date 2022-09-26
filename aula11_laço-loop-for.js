// 1. For
        //Imprime a frase "estou aprendendo" 5 vezes no console
    for(let i = 1; i <= 5;i++) {
        console.log('Estou aprendendo',i)
    }

        //Imprime apenas números primos
    for(let a = 1; a <= 5; a++){
        if(a % 2 !== 0){
            console.log(a)
        }
    }


// 2. While loop
    let i = 5;

    while(i >= 1) {
        if(i % 2 !== 0){
            console.log(i)
        }
        i--;
    }


// 3. Do..while = Faça..enquanto

    let b = 0;

    do {
        console.log('digitando!');
        b++;
    } while(b < 10);


// 4. For..in

    const pessoa = {
        nome: 'Ruan',
        idade: 18
    };
    //keyvalue (nome = key/chave e 'Ruan' = value/valor)
    for(let chave in pessoa) {
        console.log(chave,pessoa['nome']);
    };

    const cores = ['Vermelho', 'Azul', 'Verde'];

    for(let indice in cores) {
        console.log(indice,cores[indice])
    };


// 5. For..of

    for(let cor of cores){
        console.log(cor);
    }


// Testando...

const jogo = ['Gow', 'play 4', 2018];


for(let dados of jogo){
    console.log(dados)
};