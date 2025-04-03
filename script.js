// basic math
const add = function(array) {
	return array.reduce(((prev, current) => prev + current), 0)
};

const subtract = function(array) {
	return array.reduce(((prev, current) => prev - current))
}; 

const multiply = function(array) {
  return array.reduce(((prev, current) => prev * current), 1)
};

const divide = function(array) {
    return array.reduce(((prev, current) => prev / current))
  };

  function operate(operator, firstNumber, secondNumber) {
    let numArr = [Number(firstNumber), Number(secondNumber)];
    if (operator == '+') {
        return add(numArr);
    } else if (operator == '-') {
        return subtract(numArr);
    } else if  (operator == '*') {
        return multiply(numArr);
    } else if  (operator == '/') {
        if (secondNumber == 0) {
            return `You can't do that!`
        }
        return divide(numArr);
    }
    return 'Try a Valid Operation'
  }

// Phyical Layout

const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
];

const container = document.querySelector('.container')

const buttonContainer = document.querySelector('.buttons');
const display = document.querySelector('input');
let currentInput = '';
let operator = null;
let firstOperand = null;

buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        handleButtonClick(event.target.textContent)
    }
});

buttons.forEach(value => {
    const button = document.createElement('button');
    button.textContent = value;
    buttonContainer.appendChild(button);
});

let decimalCount = 0;

function handleButtonClick(value) {
    if (!isNaN(value) || value === '.') {
        if (value === '.') {
            decimalCount++;
        }
        currentInput += value;
        if (currentInput.includes('.') && decimalCount > 1){
            return;
        }
        display.value = currentInput;
    } else if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput !== '') {
            firstOperand = parseFloat(currentInput);
            operator = value;
            currentInput = '';
        }
    } else if (value === '=') {
        if (firstOperand !== null && operator && currentInput !== '') {
            const secondOperand = parseFloat(currentInput);
            display.value = operate(operator, firstOperand, secondOperand);
            currentInput = display.value;
            firstOperand = null;
            operator = null;
        }
    } else if (value === 'C') {
        currentInput = '';
        firstOperand = null;
        operator =  null;
        display.value = '';
    }
}