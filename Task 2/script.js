let display = document.getElementById('display');
let num1 = '';
let num2 = '';
let operator = '';

function appendNumber(num) {
  if (operator === '') {
    num1 += num;
    display.value = num1;
  } else {
    num2 += num;
    display.value = num1 + ' ' + operator + ' ' + num2;
  }
}

function setOperator(op) {
  operator = op;
  display.value = num1 + ' ' + operator;
}

function clearDisplay() {
  num1 = '';
  num2 = '';
  operator = '';
  display.value = '';
}

function deleteDigit() {
  if (operator === '') {
    num1 = num1.slice(0, -1);
    display.value = num1;
  } else {
    num2 = num2.slice(0, -1);
    display.value = num1 + ' ' + operator + ' ' + num2;
  }
}

function calculate() {
  let result;
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  switch (operator) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      result = n1 / n2;
      break;
  }

  clearDisplay();
  display.value = result;
}

function calculateSquareRoot() {
  const n1 = parseFloat(num1);
  const result = Math.sqrt(n1);

  clearDisplay();
  display.value = result;
}

function calculateExponentiation() {
  const n1 = parseFloat(num1);
  const result = Math.pow(n1, 2);

  clearDisplay();
  display.value = result;
}

function calculateSine() {
  const n1 = parseFloat(num1);
  const result = Math.sin(n1);

  clearDisplay();
  display.value = result;
}

function calculateCosine() {
  const n1 = parseFloat(num1);
  const result = Math.cos(n1);

  clearDisplay();
  display.value = result;
}

function calculateTangent() {
  const n1 = parseFloat(num1);
  const result = Math.tan(n1);

  clearDisplay();
  display.value = result;
}

function calculateLogarithm() {
  const n1 = parseFloat(num1);
  const result = Math.log10(n1);

  clearDisplay();
  display.value = result;
}
