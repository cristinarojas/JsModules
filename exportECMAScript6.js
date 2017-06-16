// Declaring the functions that this module will have
function generateRandom() {
	return Math.random();
}

function  sum(a, b) {
	return a + b;
}

// Exporting this functions (Can be accessed from other modules)
export { generateRandom, sum }

// Also I can rename the functions while I'm exporting.
export { generateRandom as random, sum as doSum }