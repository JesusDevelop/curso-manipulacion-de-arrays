const numbers =[1,2,3,30,43];

let found = undefined;
for(let index = 0; index < numbers.length; index++){
    let element = numbers[index];
    if(element === 30){
        found = element;
        break;
    }
}



console.log(found);

const found2 = numbers.find( item => item === 30);
console.log('find: ', found2);

const found3 = numbers.findIndex( item => item === 30);
console.log('findIndex: ', found3);

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const findProduct = products.find(obj => obj.id === '🥞'); // aunque retorna el objeto en una variable diferente, este apunta al mismo espacio en memoria, esta haciendo refetencia al objeto original.
  const findIndexProduct = products.findIndex(obj => obj.id === '🥞');
  findProduct.name = 'Hot Cakes Cakes';
  console.log('Encontrar producto: ',findProduct);
  console.log('Index: ',findIndexProduct);

  console.log(products[3]);
