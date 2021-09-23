// 017 Strings and Template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'am " + firstName + ', a ' + (year - birthYear) + ' years old' + job + '!';

console.log(jonas);

// Template Literals with backticks ` ` 

const jonasNew = `I'am ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular String in Here...`);

console.log(`String with \n\ 
multiple \n\
lines`);

console.log(`String
multiple
lines`);


