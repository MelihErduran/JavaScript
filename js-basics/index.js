console.log('Hello World');

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let firstName = 'Melih';
let lastName = 'Erduran';
const interestRate = 0.3;
console.log(interestRate);

/*let name = 'Melih'; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
firstName = undefined;
let selectedColor = null; */
let person = {
    name: 'Melih',
    age: 15,
};

console.log(person);

person.name = 'Melih2';
person['name'] = 'Melih3';

let selection = 'name';
person[selection] = 'Melih4';

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length)
function greet(name){
    console.log(name + ' is the best programmer')
};
greet('Melih Erduran');

function triArea(base, height){
    return((base * height)/2)
}

for (let i = 0; i < 5; i++) {
    console.log('I Am The Best Programmer')
}

for (let i=0; i <= 100; i++) {
    console.log(i);
}

function power(base, exponent) {
    console.log(base ** exponent);
}

power(2, 3);
power(4 ,5);

function addUp(num1, num2) {
    let total = 0
    for (let i=num1; i<=num2; i++){
        total += i
    }
    return(total)
}
console.log(addUp(4, 8));

console.log(addUp(5, 6));

let counter = 1;
while (counter <=100) {
    console.log(counter)
    counter++
};

for (let i = 1;i <=100; i++) {
    console.log(i);
}

let password = 'Melih';
let passwordEntry = prompt('Please enter your password');
while (passwordEntry != password) {
    passwordEntry = prompt('Please enter your password');
}
alert('Access Granted: Welcome To Your Website');

let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning');
} else if (hour >= 12 && hour < 16) {
    console.log('Good Afternoon');
} else if (hour >= 16 && hour < 18) {
    console.log('Good Evening');
} else {
    console.log('Good Night')
}