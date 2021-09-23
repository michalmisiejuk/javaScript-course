//022 Equality Operators_ == vs. ===
/*
18 === 18
18 === 19
'18' == 18
'18' === 18
*/


const age = 18;
if(age === 18) console.log('You just became and adult')


if(age ==  18) console.log('You just became and adult') // tricky

const favourite =Number(prompt('Whats your favourite number?'))
console.log(favourite)
console.log(typeof favourite)

if (favourite === 23) { // '23' == 23
    console.log('Cool! 23 is an amazing number!')
} else if(favourite === 7) {
    console.log('7 is also a cool number')
} else if(favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('This is a waste of time')
}

if(favourite !== 23) console.log('Why not 23?')