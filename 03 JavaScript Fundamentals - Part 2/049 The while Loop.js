
// FOR LOOP
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }


// WHILE LOOP doesnt need a counter it needs only condition
//it will run while condition is true

let rep = 1;
while (rep <=10) {      //it will run while condition is true
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !==6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to en... your roll 6`)
}