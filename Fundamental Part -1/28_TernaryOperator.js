const age = 23; 


const drink = age >= 18 ?'wine' : 'water';
console.log(drink);

let drink2;

if(age>=18){
    drink2 = 'wine';
}
else{
    drink2 = 'Watrer'
}

console.log(drink2);

console.log(`I like to drink ${age >=18? 'wine':'watrer'}`);

//Coding challenge -- Part 29
const bill = 275;
const tip = bill <= 300 && bill >=50 ? bill * 0.15: bill * 0.2;
console.log(`The bill was ${bill},the tip was ${tip},
and the total value ${bill+tip}`);