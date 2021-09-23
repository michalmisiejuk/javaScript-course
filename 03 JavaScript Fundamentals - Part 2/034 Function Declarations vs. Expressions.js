
// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }

// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
console.log(calcAge1())
console.log(calcAge1(1991))
// calcAge(1991)
const age1 = calcAge1(1991)
console.log(age1)


// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);