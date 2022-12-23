const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetireMent = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already started`);
    retrun - 1;
  }

  //return retirement;
  //return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetireMent(1991, 'Jyoti'));
console.log(yearsUntilRetireMent(1970, 'Mike'));
