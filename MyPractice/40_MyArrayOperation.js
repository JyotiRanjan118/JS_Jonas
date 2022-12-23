//Push method
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

//Unshift method
friends.unshift('John'); //It will add the value in 0 index
console.log(friends);

//Remove elements (POP Method)
friends.pop();
const popped = friends.pop();
console.log(popped); //remove and return
console.log(friends);

//Shift method      //First
console.log('---------Shift method -------------');
friends.shift(); //removes first element
console.log(friends);
console.log(friends.includes('Steven')); //To check whether steven is present or not
console.log(friends.includes('Bob')); //To check whether Bob is present or not
console.log(friends.includes(23)); //

if (friends.includes('Steven')) {
  //If steven is present in the array print the statement
  console.log('You have a friend called steven');
}
