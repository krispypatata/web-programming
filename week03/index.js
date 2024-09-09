console.log("This is a javascript message");

let message = 'This is a javascript message';

const a = 10;
let b = 250;
var c = 3000;

const arr1 = [];

console.log(a, b, c);
arr1.push(10);
arr1.push(11);
arr1.unshift(2);



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
}

letScope();