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
  ];

 // const copy1 = orders.map(item =>{item.tax = .19; return item}); // por tener internamente un objeto hace referencia al mismo valor en memoria.


  //para evita esto yy poder mutar los objetos dentro del array podemos hacerlo mediante el spread operator

  const copy2 = orders.map( (item) => {
    return{
        ...item,
        tax: item.total * 0.19,
    }
  });

  console.log('original', orders);
  console.log('Copia', copy2);