/*
function is peace of code that we can reuse over and over again just like 
variable but veriable has one value and function has many lines of code 
*/

function logger() {
    console.log('My name is Jonas');
}

logger();              //invoking / callin / running /executing the function
logger();  
logger();

// when we write function we also pass data info function,
// additionally function can also return data back
// thinking about function like about the machines


function fruitProcessor(apples, oranges) {
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice)
console.log(fruitProcessor(3,5))
console.log(fruitProcessor())

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

Number('23')                // build in function
const num = Number('23')

// keep yourself dry!

