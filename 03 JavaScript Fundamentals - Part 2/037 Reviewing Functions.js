// const yearsUnitlRetirment = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}


const yearsUnitlRetirment = function (birthYear, firstName)  {
    const age = calcAge(birthYear)              //need to capture in variable
    const retirement = 65 - age;

    if (retirement > 0 ) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} already retired!!!!`);
        return -1;
    }
}

console.log(yearsUnitlRetirment(2015, 'Alan'))
console.log(yearsUnitlRetirment(1970, 'Blake'))