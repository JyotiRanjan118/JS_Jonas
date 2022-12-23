const age = 15;

if (age >= 18) {
  console.log("Sarah can driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;

let cent;

if (birthYear <= 2000) {
  cent = 20;
} else {
  cent = 21;
}
console.log(cent);

//Coding challenge 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightMark);

console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's!`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's!`);
}
