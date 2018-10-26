// const person = {
//     name : 'Vikas Sharma',
//     age : 20,
//     location : {
//         city : 'Ahmedabad',
//         temp : 28
//     }
// };

// const { name: firstName = 'Anonymous',age} = person;

// const { city, temp: temprature } = person.location;

// console.log(`${firstName} is ${age} years old & live in ${city} where current temprature is ${temprature}`);

// const Book = {
//     title: 'Alan Turing : The Enigma',
//     //author: 'Andrew Hodges',
//     publisher: {
//         name: 'published by New York Times'
//     }
// };

// const { title:book, author:auth = 'Anonymous'} = Book;

// const { name: publisher = 'Self-Published'} = Book.publisher;

// console.log(`${book} is written by ${auth} and ${publisher} !`);


// const address = ['16/17 Sanjay-Park Road','Ahmedabad','Gujarat-',380019];

// const [ street, city, state, pin_code ] = address;

// console.log(`${street} ${city} ${state}${pin_code}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ coffee, , price ] = item;

console.log(`A medium ${coffee} costs ${price}`);