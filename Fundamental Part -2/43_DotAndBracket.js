const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtman',
    age : 2037 - 1991,
    job : 'teacher',
    friend : ['Michael','Peter','Steven']
}

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

//Bracket Notation
const nameKey = 'Name';
console.log(jonas['first'+ nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between fistName,lastName,age,job, and friends');
console.log(jonas[interestedIn]);

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}
else{
    console.log('Wrong request! Choose between firstName , lastName,age,job and friends');
}

//To insert properties and value to the Object
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//"Jonas has 3 friend, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friend.length}, and 
his best friend is called ${jonas.friend[0]}`);