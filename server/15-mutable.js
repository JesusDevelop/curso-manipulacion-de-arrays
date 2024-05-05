const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];


const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const copyArray = (array) => {return array.map(item=> {
    return {
        ...item
         }
})}
const searchproducIndex = (id,arr) =>{  return arr.findIndex(elem => elem.id === id)};

const producIndex = searchproducIndex('🥞',products);
const copyProductsSol1 = products.filter((i,index,arr) => arr[index] != arr[producIndex]);

let copyProductSol2 = copyArray(products);
if(producIndex != -1){
    myProducts.push(products[producIndex]);
    
}

products[1].id = '🍿';

console.log('productos: ',products);
console.log('copia de productos disponibles',copyProductsSol1);
console.log(copyProductSol2);
console.log('mis  productos',myProducts);


//update
const myProductsV2 = copyArray(products);


const update = {
    id: "🥞",
    chages: {
        price: 200,
        description: 'delicioso',
    }
}

const productIndexV2 = searchproducIndex('🥞',myProductsV2);

myProductsV2[productIndexV2] = {
    ...myProductsV2[productIndexV2],
    ...update.chages,
};


console.log('update', myProductsV2);
console.log('my products: ', products);