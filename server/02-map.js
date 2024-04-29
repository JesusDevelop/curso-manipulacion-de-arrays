const names =['Giuliana','Jesus','Vanessa','Panchito'];

const copyNames =[];

const copyNamesMap = names.map(value=> value + ' Copia'); // map genera un nuevo array con la transformacion
console.log({names,copyNamesMap});

for(let i=0; i<names.length; i++){
    copyNames.push(names[i] + ' Copia') 
}
