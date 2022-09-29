// Antes utilizavamos o operador concat()
const numeros1 = [1,2];
const numeros2 = [3,4];

const combinar = numeros1.concat(numeros2);
console.log(combinar);

// Agora podemos combinar arrays com o operador spread(...)
const array1 = [1,2,3,4];
const array2 = [5,6,7,8];

const arraysCombinados = [...array1,...array2];
console.log(arraysCombinados);

// Clonando arrays com spread
const clone = [...arraysCombinados];
console.log(clone);


