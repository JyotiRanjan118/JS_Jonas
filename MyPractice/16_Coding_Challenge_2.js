const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightMark);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIJohn, BMIMark, markHigherBMI);