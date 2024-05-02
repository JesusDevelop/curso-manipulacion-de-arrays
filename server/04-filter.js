const words = ['spray','limit','elite','exuberant'];

const newArray =[];

for(item of words){
    if (item.length >=6){
        newArray.push(item);
    }
}

console.log('newArray',newArray);
console.log('original',words);

const filterArray = words.filter( item => item.length >=6 );

console.log('original',words);
console.log('filter',filterArray);


const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicol",
        total: 658,
        delivered: false,
      },
  ];

  const newfilter = orders.filter(item => item.delivered && item.total >= 100);

  console.log(newfilter);

  const search = (query) =>{
    return orders.filter(item =>{
        return item.customerName.includes(query);
    });
  }

  console.log('Resultado de busqueda',search('Nico'));