const jonas = {
    firstName: 'Jonas',
    lastName: 'Scmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    bestFriend: 'Michael',
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }


    // calcAge: function () {
    //     console.log(this); 
    //     return 2037 - this.birthYear; //this points to jonas beacuse is in front of birthYear. its has a purpouse of preventing unworking code
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
    
};

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }    

//any function that is attach to object is called method


// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));


console.log(jonas.calcAge());


console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challange
// "Jonas is a 46-year old teacher, and he has driver's license"

console.log(`${jonas.firstName} is a ${jonas.calcAge(jonas.birthYear)}-year old ${jonas.job}, and has ${jonas.hasDriversLicense ? 'a' : 'no'} driver's license`);