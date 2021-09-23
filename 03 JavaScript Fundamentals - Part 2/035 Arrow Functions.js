// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// const yearsUnitlRetirment = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUnitlRetirment(1991));

const yearsUnitlRetirment = (birthYear, firstName) => {
        const age = 2037 - birthYear;
        const retirement = 65 - age;
        // return retirement;
        return `${firstName} retires in ${retirement} years`;
}
    
console.log(yearsUnitlRetirment(1991, 'Jonas'));
console.log(yearsUnitlRetirment(1980, 'Bob'));