//metodo join

const elements = ['water','fire','air'];

let result='';
const separator ='--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];

    if(index < element.length -1){
        result = result + element + separator;
    }else{
        result = result + element;
    }
}

console.log(result);

const result2 = elements.join('--');
console.log('Metodo Join:',result2);

//Metodo split (este convierte strings a arrays)

const title = 'Curso de manipulacion de Arrays';

const titleArray = title.split(' ');

console.log('Metodo split: ',titleArray);

const urlWeb = title.split(' ').join('-').toLowerCase();

console.log('urlWeb (split + join) ', urlWeb );