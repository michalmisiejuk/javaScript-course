const jonas = [
    'Jonas',
    "Schmedtmann",
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// backwards loop

for(let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}


// loop inside of the loop

for(let exercise = 1; exercise <= 3; exercise++){
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
    }
}