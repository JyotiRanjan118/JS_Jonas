function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const appleFruits = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  const juice = `Juice with ${appleFruits} apples and ${orangesPieces} oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
