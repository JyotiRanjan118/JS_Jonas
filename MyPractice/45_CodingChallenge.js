const mark = {
  fullName: 'Mark miler',
  mass: 78,
  height: 1.69,
  calBMI: function () {
    //Funtion as a key value pair
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'John smith',
  mass: 92,
  height: 1.69,
  calcAge: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calBMI;

console.log(mark.calBMI());
console.log(john.calcAge());

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.bmi}'s BMI ${john.bmi} is higher than ${john.fullName}'s BMI ${john.bmi}`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.bmi}'s BMI ${mark.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}`
  );
}
