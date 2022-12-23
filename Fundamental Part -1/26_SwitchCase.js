const day = 'Wednesday';

switch (day) {
    case 'Monday':
        console.log('Plan course structure');
        console.log('Go to conding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

//Using if else 
if(day === 'Monday'){
    console.log('Plan course structure');
    console.log('Go to conding meetup');
}else if(day === 'tuesday'){
    console.log('Prepare theory video');
}
else if(day === 'Wednesday' || day === 'thursday'){
    console.log('Write code examples');
}
else if(day === 'friday'){
    console.log('Record videos');
}
else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend :D');
}
else{
    console.log('Not a valid day!');
}

//Statements and Expressions
3 + 4
1991
true && false && !false

if(23 > 10){
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);