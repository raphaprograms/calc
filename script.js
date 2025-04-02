// basic math
const add = function(array) {
	return array.reduce(((prev, current) => prev + current), 0)
};
console.log(add([2, 4, 6, 5,]));

const subtract = function(array) {
	return array.reduce(((prev, current) => prev - current), 0)
}; 
console.log(subtract([2, 4, 6, 5,]));

const multiply = function(array) {
  return array.reduce(((prev, current) => prev * current), 1)
};
console.log(multiply([2, 4, 6, 5,]));

const divide = function(array) {
    return array.reduce(((prev, current) => prev / current), 1)
  };
  console.log(divide([2, 4, 6, 5,]));

  let num1 
  let op 
  let num2

  function operate(operator, firstNumber, secondNumber) {
    let numArr = [firstNumber, secondNumber]
    if (operator == '+') {
        add(numArr);
    } else if (operator == '-') {
        subtract(numArr);
    } else if  (operator == '*') {
        multiply(numArr);
    } else if  (operator == '/') {
        divide(numArr);
    }
  }

// Phyical Layout

const container = document.querySelector('.container');

const title = document.createElement('div');
title.textContent = 'CALCULATOR';
container.appendChild(title);

const display = document.createElement('div');
const input = document.createElement('span');
input.textContent = '1 + 1';
display.appendChild(input);
container.appendChild(display);

const tools = document.createElement('div');


const buttons = []
for (let i = 0; i <= 15; i++) {
    button = document.createElement('button');
    button.textContent = `${i}`;
     if (i == 0) {
        button.textContent = `C`;
     } else if (i == 10) {
        button.textContent = `0`; 
    } else if (i == 11) {
        button.textContent = `+`; 
    } else if (i == 12) {
        button.textContent = `-`; 
    } else if (i == 13) {
        button.textContent = `*`; 
    } else if (i == 14) {
        button.textContent = `/`; 
    } else if (i == 15) {
        button.textContent = `=`; 
    }


    buttons.push(button);
}

tools.append(...buttons);
container.appendChild(tools);
