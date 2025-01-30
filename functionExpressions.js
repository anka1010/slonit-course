function calculate(operand1, operand2, operation) {
  return operation(operand1, operand2);
}

const multiply = function (operand1, operand2) {
  return operand1 * operand2;
};

const divide = function (operand1, operand2) {
  return operand1 / operand2;
};

const add = function (operand1, operand2) {
  return operand1 + operand2;
};

const subtract = function (operand1, operand2) {
  return operand1 - operand2;
};

const operations = {
  multiply,
  divide,
  add,
  subtract,
};

const selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation]));
