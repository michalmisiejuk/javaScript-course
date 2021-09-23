/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
GOOD LUCK 
*/

//My Solution

// const markMiller = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         return this.mass / this.height ** 2 
//     }
// }

// const johnSmith = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         return this.mass / this.height ** 2 
//     }
// }

// const final = function () {
//     if (markMiller.calcBMI() > johnSmith.calcBMI()) {
//         console.log(`${markMiller.fullName} BMI is (${markMiller.calcBMI()}) is higher then ${johnSmith.fullName}'s (${johnSmith.calcBMI()})`)
//     } else {
//         console.log(`${johnSmith.fullName} BMI is (${johnSmith.calcBMI()}) is higher then ${markMiller.fullName}'s (${markMiller.calcBMI()})`) 
//     }
// }

// console.log(final())


//Instructor Solution

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI()
john.calcBMI()
console.log(mark.bmi, john.bmi)


if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} BMI is (${mark.bmi}) is higher then ${john.fullName}'s (${john.bmi})`)
} else {
    console.log(`${john.fullName} BMI is (${john.bmi}) is higher then ${mark.fullName}'s (${mark.bmi})`)
}