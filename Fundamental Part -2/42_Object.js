const jonasArray = [
    'Jonas',
    'Schmedtman',
    2037 - 1991 ,
    'teacher',
    ['Micheal', 'Peter','Steven']
]

const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtman',
    age : 2037 - 1991,
    job : 'teacher',
    friend : ['Michael','Peter','Steven']
}
console.log(jonas);

console.log(jonas.firstName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first'+nameKey]);
console.log(jonas['last'+nameKey]);

const interestedIn = prompt('What do you want to know about Jonas ? Choose between firstname,lastname,age,job and friend'); 
console.log(jonas[interestedIn]);       //jonas[interestedIn] converts as a variable

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}else{
    console.log('Wrong request ! Choose between firstName,lastName,age,job and friends');
}

//To insert value in existing objectl
jonas.location = 'Portugal';
jonas['twitter']='@jonasschmedtman';
console.log(jonas);


console.log(`${jonas.firstName} has ${jonas.friend.length}, and 
his best friend is called ${jonas.friend[0]}`);

