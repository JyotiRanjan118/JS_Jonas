
function cutFruitPieces(fruit){
    return fruit * 3;

}

function fruitProcessor(apples ,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangesPieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));