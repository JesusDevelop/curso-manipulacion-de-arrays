const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]

  const atributos = users.map(item => item.attributes).flat();

  console.log(atributos); 

  const atrimapFlat = users.flatMap(item => item.attributes);
  console.log('flatMap: ', atrimapFlat);

  //reto

  const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

const dateStartArray = Object.values(calendars).flatMap(item => item.map( date => date.startDate));

console.log(dateStartArray);

const rtaReto = Object.values(calendars).flat();
console.log(rtaReto)


const input = [];

  function countWords(array){
    
    return array.flatMap( item => item.split(' ')).length;
  }

  console.log(countWords(input));