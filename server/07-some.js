const numbers = [1,3,4,5,6];
let flag = false;
let flag2 = false;
for(let index=0; index < numbers.length; index++){
    let elem = numbers[index];
    if(elem % 2 === 0){
        flag = true;
        console.log(elem);
        break;
    }
}

for(elem of numbers){
    if (elem % 2 === 0){
        flag2 = true;
        break;
    }
}

let flag3 = numbers.some(elem => elem % 2 === 0);

console.log(flag);
console.log(flag2);
console.log(flag3);

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21, 30),
  };

  

  const { areIntervalsOverlapping } = require("date-fns");


const isOverlap = (newDate) => {
    return dates.some( date =>{
        return areIntervalsOverlapping (
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    });
}

console.log('isOverLap ',isOverlap(newAppointment));