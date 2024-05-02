const totals = [1,2,3,4];

// haciendo la suma de todos los elementos del array de manera tradicional seria:
let suma=0;
// for(let index= 0; index< totals.length; index++){
//     suma = suma + totals[index];
// }

//tradicional con es6 

for(element of totals){
    suma = suma + element;
}
console.log(suma);

//aplicando el metodo reduce
// como primer parametro se pasa una arrow function con dos parametros 1)el acumulador y 2)cada elemento del item
//como segundo parametro se pasa el numero de inicializacion del acumulador
const sumaReduce = totals.reduce((acumulador, elemento) => acumulador += elemento, 0);
console.log('Suma Reduce',sumaReduce);