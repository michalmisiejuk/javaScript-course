const age = 15;
const isOldEnough = age >= 18;
console.log(isOldEnough)
if(isOldEnough) {
    console.log(`Sarah can start driving license`)
}

console.log(isOldEnough)
if(age >= 18) {
    console.log(`Sarah can start driving license`)
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`)  
}

// if () {     (true or false condition base on what if or else would be meet)
// } else {
// }

const birthYear = 2001;
let century;
if(birthYear <= 2000)   {
    century = 20;
} else {
    century = 21;
}
console.log(century);


