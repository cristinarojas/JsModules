// Importing the object that I want to use
import utils from 'exportDefaultECMAScript6';

console.log(utils.generateRandom());
console.log(utils.sum(1, 2));

// I can export the imported object
export default utils;