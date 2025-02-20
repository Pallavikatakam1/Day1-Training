function findLargestElement() {
    // Get the input value
    const input = document.getElementById('arrayInput').value;
    
    // Split the input string into an array of numbers
    const array = input.split(','); // No map function here

    // Convert the elements to numbers
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }

    // Initialize the largest element
    let largestElement = array[0];

    // Find the largest element in the array
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largestElement) {
            largestElement = array[i];
        }
    }

    // Display the result
    document.getElementById('largestResult').innerText = `The largest element is: ${largestElement}`;
}


// Function to calculate the factorial
function calculateFactorial() {
    // Get the input value
    const number = document.getElementById('factorialInput').value;
    if(isNaN(number))
    {
       document.getElementById('factorialResult').innerText = 'Please enter the valid number'
    }
    else{

    // IIFE to calculate the factorial
    const result = (function(num) {
        if (num === 0 || num === 1) return 1;
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    })(number);

    // Display the result
    document.getElementById('factorialResult').innerText = `The factorial of ${number} is: ${result}`;
}
}

// Function Expression
const calculateSquareFunctionExpression = function(num) {
    return num * num;
};

function FunctionExpression() {
    // Get the input value
    const number = document.getElementById('squareInput').value;

    // Calculate the square using the function expression
    const result = calculateSquareFunctionExpression(number);

    // Display the result
    document.getElementById('squareResult').innerText = `Square (Function Expression): ${result}`;
}

// Arrow Function
const calculateSquareArrowFunction = (num) => num * num;

function ArrowFunction() {
    // Get the input value
    const number = document.getElementById('squareInput').value;

    // Calculate the square using the arrow function
    const result = calculateSquareArrowFunction(number);

    // Display the result
    document.getElementById('squareResult').innerText = `Square (Arrow Function): ${result}`;
}

// IIFE to calculate the square
function IIFE() {
    // Get the input value
    const number = document.getElementById('squareInput').value;

    // IIFE to calculate the square
    const result = (function(num) {
        return num * num;
    })(number);

    // Display the result
    document.getElementById('squareResult').innerText = `Square (IIFE): ${result}`;
}
