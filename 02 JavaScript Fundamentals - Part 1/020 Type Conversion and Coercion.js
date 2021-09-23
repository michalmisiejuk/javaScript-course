// 020 Type Conversion and Coercion
// Conversion - manualy convert from one type to another
// Coercion - it happens behind the scene

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);


//type coercion
console.log('I am' + 23 + 'years old')  // number will be converted o string automaticly
console.log('I am' + ' 23 ' + 'years old')
console.log('I am' + String(23) + 'years old')
console.log('23' - '10' - 3);                  //oposite coercion
console.log('23' + '10' + 3); 
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '2');

let n = '1' + 1;
n = n - 1;
console.log(n); // 9
