// Importing the functions that I want to use from module file.
import { generateRandom, sum } from 'exportECMAScript6';

// Using the functions that I imported.
console.log(generateRandom());
console.log(sum(1, 3));

// I can import the entire module.
import 'exportECMAScript6' as utils;

// Using the functions that I imported from the entire module.
console.log(utils.generateRandom());
console.log(utils.sum(1, 3));