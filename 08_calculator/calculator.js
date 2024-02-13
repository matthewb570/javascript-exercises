const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((currentSum, number) => currentSum + number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((currentProduct, number) => currentProduct * number, 1);
};

const power = function(number, power) {
	let product = 1;
  for (let i = 0; i < power; i++) {
    product *= number;
  }
  return product;
};

const factorial = function(number) {
	
  let factorial = 1;
  for (let i = number; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
