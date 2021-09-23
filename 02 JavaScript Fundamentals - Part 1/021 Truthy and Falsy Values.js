// 021 Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('String'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 0;
if (money) {
    console.log (`Don't spend it all ;)`)
} else {
    console.log(`You shoud get a job`)
}

// let height;
// if(height) {
//     console.log(`Yay hight is defined`)
// } else {
//     console.log(`Height is Undefined`)
// }

let height = 100;
if(height) {
    console.log(`Yay hight is defined`)
} else {
    console.log(`Height is Undefined`)
}