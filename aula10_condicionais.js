// Condicionais IF e ELSE

    // Se o horário estiver entre 6:00 e 12:00: Bom dia!
    // Se o horário estiver entre 12:00 e 18:00: Boa tarde!
    // Caso contrário: Boa noite!

let hora = 7;

if (hora > 6 && hora < 12) {
    console.log('Bom dia!');
}

else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!');
}

else {
    console.log('Boa noite!');
}


// Condicionais switch e case

    //Imagine um cenário no qual a variável 'permissão' pode receber três valores: comum, gerente, diretor.

let permissao; // comum,gerente,diretor
permissao = 'comum';

switch (permissao) {
    case 'comum':
    console.log('usuário comum')
    break;

    case 'gerente':
    console.log('usuário diretor')
    break;

    case 'diretor':
    console.log('usuário diretor')
    break;

    default:
    console.log('usuário desconhecido')
}

// Switch troca os valores das variáveis nas condições if.
// O case vai ver qual resultado será substituído
// O default seria o else, caso a condição caio em algo não definido