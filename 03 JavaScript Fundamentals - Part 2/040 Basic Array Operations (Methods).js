const friends = ['Michael', 'Steven', 'Peter'];

//Add elements

friends.push('Jay'); // push is a methond which technicly is a function (build in js) that we call with argument
const newLenght = friends.push('Mike');
console.log(friends);
console.log(newLenght);

friends.unshift('John'); //adds item to array at first position
console.log(friends);
//Remove Elements

friends.pop(); // remove last element from a list
const popped = friends.pop();  // this methond returns removed element
console.log(friends);
console.log(popped) ;

friends.shift(); //removes 1st element from the list
console.log(friends)


console.log(friends.indexOf('Steven')) // locates element called with argument
console.log(friends.indexOf('Bob')) // with element that is not there we get -1

// ES6 method includes - returens true/false if element is present on the list

friends.push(23)
console.log(friends.includes('Michael'))
console.log(friends.includes('John'))
console.log(friends.includes(23)) 
console.log(friends.includes('23')) // does not do type cohersion

if (friends.includes('Peter')) {
    console.log('You have mate called Peter');
}