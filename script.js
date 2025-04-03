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

  let nums = [];
  let num = '';
  let op 

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

const container = document.querySelector('.container');

const title = document.createElement('div');
title.textContent = 'CALCULATOR';
container.appendChild(title);

const display = document.createElement('div');
const input = document.createElement('span');
input.textContent = '';
display.appendChild(input);
container.appendChild(display);

const tools = document.createElement('div');
tools.classList.add('btns')


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

tools.addEventListener("click", (event) => {
    let clicked
    let target = event.target;
    if (target.textContent == 'C') {
        input.textContent = '';
        op = '';
    }
    else if(target.textContent == '+' ||
            target.textContent == '-' ||
            target.textContent == '*' ||
            target.textContent == '/') {
                if (op !== '' && nums.length <= 2){
                    let result = operate(op, nums[0], nums[1]);
                    input.textContent = `${Math.floor(result * 100) / 100}`
                }

        num = input.textContent;
        op = target.textContent;
        nums.push(num);
        input.textContent = '';
    } 
    else if (target.textContent == '='){
        num = input.textContent;
        nums.push(num);
        let result = operate(op, nums[0], nums[1]);
        input.textContent = `${Math.floor(result * 100) / 100}`;
        nums = [];
        num = '';
    }
    else if (target.matches('button')) {
        input.textContent += target.textContent;
    }

})


