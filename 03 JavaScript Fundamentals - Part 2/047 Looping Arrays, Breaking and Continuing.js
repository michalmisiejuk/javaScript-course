const jonas = [
    'Jonas',
    "Schmedtmann",
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
// const types = [];

// for (let i = 0; i < jonas.length ; i++) {
//    //reading from jonas array
//     console.log(jonas[1], typeof jonas[i]);

//     // Filling types array
  
//     // types[i] = typeof jonas[i]; 
    
//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length ; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(years)


const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++ ) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break


for (let i = 0; i < jonas.length ; i++) {
    if (typeof jonas[i] !== 'string') continue;
   
    console.log(jonas[1], typeof jonas[i]);
}
 
// Break with number

for (let i = 0; i < jonas.length ; i++) {
    if (typeof jonas[i] === 'number') break;
   
    console.log(jonas[1], typeof jonas[i]);
}
 
