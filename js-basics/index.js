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

/*for (let i=0; i <= 100; i++) {
    console.log(i);
}*/

function power(base, exponent) {
    console.log(base ** exponent);
}

power(2, 3);
power(4 ,5);