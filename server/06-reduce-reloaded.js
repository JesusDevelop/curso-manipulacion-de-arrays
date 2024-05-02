const item = [1,3,2,3,6,9,10];

const contadorRep = item.reduce((obj, elem)=>{
    if(!obj[elem]){
        obj[elem] = 1; 
    }else{
        obj[elem] += 1; 
    }

    return obj;
}, {});

console.log(contadorRep);

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const agruparLevels = data.map(item => item.level)
  .reduce((obj,elem)=>{
    if(!obj[elem]){
        obj[elem] = 1;
    }else{
        obj[elem] += 1;
    }
    return obj;
  }, {});

  console.log(agruparLevels);

  const item2 = [1,3,2,3,6,9,10];

  let agruparRangos = item2.reduce((obj,elem)=>{
    if(elem <= 5 ){
        obj['1-5'] += 1;
    }  
    
    else if(elem >= 6  && elem <= 8){
        obj['6-8'] += 1;
    }
     else if(elem => 9  && elem <= 10){
        obj['9-10'] += 1;
    }else{
        obj['11+'] += 1;
    }
    return obj;
  }, {
    '1-5':0,
    '6-8':0,
    '9-10':0,
    '11+':0,
  });

  console.log('RETO: ',agruparRangos);