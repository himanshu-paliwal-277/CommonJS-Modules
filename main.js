const { linearSearch, binarySearch } = require('./Search.js');
// requre is a function provided by node.js that allows us to import modules

const math = require('./math.js');
// Importing the 'math' module using the require() function.
// The require() function loads the module file (./math.js) and assigns its exports to the 'math' variable.
// This allows us to access any functions or values exported from the 'math.js' module.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(linearSearch(arr, 7));
console.log(binarySearch(arr, 7));

console.log(math.add(1, 2));
console.log(math.subtract(1, 2));
console.log(math.multiply(1, 2));
console.log(math.divide(1, 2));