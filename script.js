// Variables to store the numbers and operator
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = null;
let resetDisplay = false;

// Get the display element
const display = document.getElementById('display');

// Add event listeners to all number buttons
document.querySelectorAll('.num').forEach(button => {
    button.addEventListener('click', (e) => {
        handleNumber(e.target.dataset.num);
    });
});

// Add event listeners to all operator buttons
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', (e) => {
        handleOperator(e.target.dataset.op);
    });
});

// Event listener for the equals button
document.getElementById('equals').addEventListener('click', () => {
    if (firstNumber && secondNumber && operator) {
        result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        displayResult(result);
        firstNumber = result;
        secondNumber = '';
        operator = '';
        resetDisplay = true;
    }
});

// Event listener for the clear button
document.getElementById('clear').addEventListener('click', clearCalculator);

// Function to handle number input
function handleNumber(num) {
    if (resetDisplay) {
        firstNumber = '';
        resetDisplay = false;
    }

    if (!operator) {
        firstNumber += num;
        display.textContent = firstNumber;
    } else {
        secondNumber += num;
        display.textContent = secondNumber;
    }
}

// Function to handle operator input
function handleOperator(op) {
    if (!firstNumber) return;
    if (secondNumber) {
        result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        displayResult(result);
        firstNumber = result;
        secondNumber = '';
    }
    operator = op;
}

// Function to clear the calculator
function clearCalculator() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = null;
    display.textContent = '0';
}

// Function to display the result
function displayResult(res) {
    if (res === 'Error') {
        display.textContent = res;
        resetDisplay = true;
        return;
    }
    display.textContent = Math.round((res + Number.EPSILON) * 100) / 100; // Round to 2 decimal places
}

// Basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error';
    }
    return a / b;
}

// Operate function that takes an operator and two numbers
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}
