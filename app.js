// // //Task 1
let userAge = 0;

if (userAge <= 2 && userAge >= 0) {
    console.log('You are an infant');
} else if (userAge <= 18 && userAge >= 12) {
    console.log('You are a teenager');
} else if (userAge <= 60 && userAge >= 18) {
    console.log('You are an adult');
} else if (userAge >= 60) {
    console.log('You are a retiree');
}


// //Task 2
let number = prompt('Enter any number from 0 to 9');

switch (number) {
    case '0':
    console.log ('0 is )');
    break;

    case '1':
    console.log ('1 is !');
    break;

    case '2': 
    console.log ('2 is @');
    break;

    case '3':
    console.log('3 is #');
    break;

    case '4':
    console.log('4 is $');
    break;

    case '5':
    console.log('5 is %');
    break;

    case '6':
    console.log('6 is ^');
    break;

    case '7':
    console.log('7 is &');
    break;

    case '8':
    console.log('8 is *');
    break;

    case '9':
    console.log('9 is (');
    break;
}


// // Task 3
let number = prompt('Enter any number from 100 to 999');

if (number[1] === number[2] || number[2] === number[3] || number[1] === number[3]) {
    document.write('TRUE');
} else {
    document.write('FALSE');
};


// // Task 4 
let number = prompt('Enter any year');

if (number % 400 == 0 || (number % 4 == 0 && number % 100 !== 0)) {
    console.log('Leap year');
} else {
    console.log('Not a leap year');
};

// Task 5
let number = prompt('Enter any five-digit number')

if (number === number.split('').reverse().join('')) {
    console.log('Palindrome');
} else {
    console.log('Not a palindrome');
}

// // Task 6 
let number = prompt('Please enter the number if USD');
let currency = prompt('Please choose currency. 1 - EUR, 2 - UAN, 3 - AZN');

switch(currency) {
case '1':
alert(number * 0.9 + 'EUR');
break;

case '2':
alert(number * 31 + 'UAN');
break;

case '3':
alert(number * 1.7 +'AZN');
break;
}


// //Task 7
let number = prompt('Please enter a price of your purchase');

if (number >= 200 && number <= 300) {
    alert((number / 100) * 97 + '$ is the price of your purchase with 3 percents of discount');
} else if (number >= 301 && number <= 500) {
    alert((number / 100) * 95 + '$ is the price of your purchase with 5 percents of discount');
} else if (number >= 501) {
    alert((number / 100) * 93 + '$ is the price of your purchase with 7 percents of discount');
} else {
    alert('You have no discount');
};


// // Task 8
let circleLength = prompt('Enter the lenght of a circle');
let squarePerimeter = prompt('Enter the perimeter of a square');

if ((circleLength / 3.14) <= (squarePerimeter / 4)) {
    alert('A circle fits into a square');
} else {
    alert('A circle doesn\'t fit into a square');
};


// // Task 9
let mountain = prompt('What is the highest mountain in the world? 1 - Chomolungma, 2 - Hoverla, 3 - The Andes');
let city = prompt('What city has the largest population. 1 - Tokyo, 2 - Cairo, 3 - Shanghai');
let president = prompt('what is the name of the president of China? 1 - Xi Jinping, 2 - Deng Xiaoping, 3 - Mao Zedong.');
let score = 0;

if (mountain == 1) {
    score +=2;
} if (city == 1) {
    score += 2;
} if (president == 1) {
    score += 2;
}

alert('Your score is ' + score);



