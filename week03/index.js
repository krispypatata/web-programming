console.log("This is a javascript message");

let message = 'This is a javascript message';

const a = 10;
let b = 250;
var c = 3000;

const arr1 = [];

console.log(a, b, c);
arr1.push(10);
arr1.push(11);
arr1.unshift(2);``



console.log(arr1);


arr1.shift();
console.log(arr1);

function varScope() {
    console.log('\nVar Scoping');
    var a = 8;

    if (true) {
        // smaller scope
        var a = 8;
        var a = a + 1;
        console.log(a);
    }

    console.log(a);
}

varScope();

function letScope() {
    console.log('\nLet Scoping');
    let b = 8;

    if (true) {
        // smaller scope
        let b = 8;
        b = b + 1;
        console.log(b);
        
    }

    console.log(b);

    console.log(`typeof(${b}): ` + typeof(b));
}

letScope();


// const typeChecker = null;
var typeChecker; // undefined
console.log(`typeof(${typeChecker}): ` + typeof(typeChecker));

// Objects
// Quotations are not required for keys

const person = {
    name: 'Tim Berners-Lee',
    age: 66,
    gender: 'male',
    interests: ['physics', 'web'],
}

console.log(`typeof(${person}): ` + typeof(person));
console.log(person);
console.log(person.name);


// Accessing items inside the object
for (let i = 0; i < person.interests.length; i++) {
    console.log(person.interests[i]);
}

// console.log(person["name"]);
// Quotation marks are used to access elements with keys enclosed in quotation marks
const animal = {
    "number-of-legs": 4,
    "fur-color": 'brown',
}

console.log(person["name"]);
console.log(animal['fur-color']);
console.log(animal["fur-color"]);

animal.mammal = true;
console.log(animal);

delete animal.mammal;
console.log(animal);

const profile = ["Carl", 5, false, {color: "Green"}];

console.log("\nArray");
console.log(profile);
