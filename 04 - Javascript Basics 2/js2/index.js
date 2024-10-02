// import { getTheSum } from "./math.js";
// import getTheSum from "./math.js";
// import math from "./math.js";        // ES - 6 


// CommonJs
const math = require('./math.js');      // CommonJs

console.log(math.getTheSum(12, 6));
console.log(math.PI);
console.log(math.obj);


// snake-case
const {snakeCase} = require('snake-case');  // CommonJs
// import { snakeCase } from 'snake-case';     // ES6

console.log(snakeCase("PascalCase"));
console.log(snakeCase("The quick brown fox jumps over the lazy dog"));