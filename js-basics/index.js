console.log('Hello World');

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let firstName = 'Melih';
let lastName = 'Erduran';
const interestRate = 0.3;
interestRate = 1;
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

