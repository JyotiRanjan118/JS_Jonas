const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);

console.log(!hasDriverLicense);

// if(hasDriverLicense && hasGoodVision){
//     console.log('Sarah is able to drive');
// }else{
//     console.log('Someone else should drive');
// }

const isTired = true;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasDriverLicense && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}
