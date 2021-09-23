const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = false; // C


console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(hasDriversLicense && hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...')
}

if(hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...')
}

console.log(hasDriversLicense || hasGoodVision || isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...')
}