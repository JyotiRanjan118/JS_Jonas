//Push method
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

//Unshift method
friends.unshift('John');
console.log(friends);

//Remove elements (POP Method)
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

//Shift method      //First
friends.shift();
console.log(friends);
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

//To check if element is included in array
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called steven');
}
