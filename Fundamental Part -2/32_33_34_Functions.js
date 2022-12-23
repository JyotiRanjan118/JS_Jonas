'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive : D');

//Function : 
function logger(){
    console.log("My name is Jyoti");
}

//Calling/running/invoking the function
logger();
logger();
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0)
console.log(appleJuice);
//OR
console.log(fruitProcessor(5,0));
//Calling 2nd time
const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');


//Function_Part 34
//Function declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

////Function expression
const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1,age2);