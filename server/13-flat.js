const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, [8, 9]],
  ];
const newArray = [];
  for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        
        newArray.push(element);
    } 
 
   
  }

  console.log(newArray);

  const flatMatriz = matriz.flat(2);
  console.log(flatMatriz);

  //haciendo metodo flat con recursividad:

  function flatRecursivo(matriz){
    let newArray = [];

   for (const element of matriz) {
     if(Array.isArray(element)){
         newArray = newArray.concat(flatRecursivo(element));
     }else{
        newArray.push(element);
     }
   }
   return newArray;
  }

  console.log('funcion recursiva: ', flatRecursivo(matriz));