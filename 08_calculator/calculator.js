const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let ans = 0;
	arr.forEach(element => ans += element);
  return ans;
};

const multiply = function(arr) {
  let ans = 1;
  arr.forEach(element => ans *= element);
  return ans;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let ans = 1;
  for (let i = 1; i <= num; i++) {
    ans *= i;
  }
  return ans;
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
