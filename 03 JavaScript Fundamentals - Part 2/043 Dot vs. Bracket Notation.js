const jonas = {
    firstName: 'Jonas',
    lastName: 'Scmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    bestFriend: 'Michael',
};

console.log(jonas);

console.log(jonas.lastName)
console.log(jonas['lastName'])

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' +nameKey)

// const intrestedIn = prompt('What do you want o know?');
// console.log(jonas[intrestedIn]);

// if (jonas[intrestedIn]) {
//     console.log(jonas[intrestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }

jonas.location = 'Portugal';
jonas['twitter'] = '@fuckoff';
console.log(jonas);

// Challange 
// Jonas has 3 friends, and his best friend is called Michael

console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`)