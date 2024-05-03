const numbers = [1,3,5,7,36,25,39];

let flag = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    
    if(element >= 40){
        flag=false;
        console.log(element);
    
    }
}

console.log(flag);

let flag2 = numbers.every(elem => {return elem <= 40});

console.log('every: ', flag2);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 14,
    },
  ];

  const flag3 = team.every(obj => obj.age <= 15);

  console.log('Todos son menores de 15: ', flag3)