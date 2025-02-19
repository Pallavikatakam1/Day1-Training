function checkEvenOdd() {
    let number = document.getElementById('evenOddInput').value;
    let output = document.getElementById('output1');
    if (number % 2 === 0) {
        output.innerHTML = number + " is even.";
    } else {
        output.innerHTML = number + " is odd.";
    }
}

function multiplicationTable() {
    let number = document.getElementById('multiplicationInput').value;
    let output = document.getElementById('output2');
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += number + " x " + i + " = " + (number * i) + "<br>";
    }
    output.innerHTML = result;
}

function DayOfWeek() {
    let dayNumber = document.getElementById('dayInput').value;
    let output = document.getElementById('output3');
    switch(dayNumber) {
        case "0":
            output.innerHTML = "Monday";
            break;
        case "1":
            output.innerHTML = "Tuesday";
            break;
        case "2":
            output.innerHTML = "Wednesday";
            break;
        case "3":
            output.innerHTML = "Thursday";
            break;
        case "4":
            output.innerHTML = "Friday";
            break;
        case "5":
            output.innerHTML = "Saturday";
            break;
        case "6":
            output.innerHTML = "Sunday";
            break;
        default:
            output.innerHTML = "Invalid day number. Please enter a number between 1 and 7.";
    }
}

function sumOfNaturalNumbers() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    document.getElementById('output4').innerHTML = "Sum of the first 10 natural numbers is: " + sum;
}

function reverseString() {
    let str = document.getElementById('stringInput').value;
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    document.getElementById('output5').innerHTML = "Reversed String: " + reversedStr;
}