const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinter = function (avgDolphins, avgKolas) {
  if (avgDolphins >= 2 * avgKolas) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKolas}`);
  } else if (avgKolas >= 2 * avgDolphins) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKolas}`);
  } else {
    console.log('No teams wins ....');
  }
};

checkWinter(scoreDolphins, scoreKoalas);
checkWinter(576, 111);

//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinter(scoreDolphins, scoreKoalas);
