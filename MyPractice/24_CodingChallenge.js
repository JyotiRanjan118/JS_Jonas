const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphin win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy');
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log('Both win the trophy');
} else {
  console.log('No one wins the trophy');
}
