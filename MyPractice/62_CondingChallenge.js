const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`....${data1[0]}C...${data1[1]}C ....${data1[2]}`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} c in ${i + 1} days ...`;
  }
  console.log('.....' + str);
};

printForecast(data1);

console.log('Git file');
