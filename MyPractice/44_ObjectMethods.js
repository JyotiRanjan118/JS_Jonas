//"use strict";

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friend: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    //console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year ${jonas.job},
    he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  },
};

//calling method from an object
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
//console.log(jonas['calcAge'](1991));

console.log(jonas.getSummary());

('use strict');
const x = '23';
if (x == 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge);
