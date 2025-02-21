// Create an array of numbers
const arrayNumbers = [12,7,6,8];

// Use the reduce method to find the sum of the array
const sum = arrayNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Display the result in HTML
document.getElementById('result').textContent = `The sum of the array is: ${sum}`;




const arrayElements = [2,8,12,9,7,3,0,28,19];

// Function to filter even numbers from the array
function filterEvenNumbers(arr) {
    return arr.filter(number => number % 2 === 0);
}

// Use the function to get the even numbers
const evenNumbers = filterEvenNumbers(arrayElements);

// Display the result in HTML
document.getElementById('evenNumbers').textContent = `Even numbers: ${evenNumbers.join(', ')}`;



const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

// Display the book's properties in HTML
document.getElementById('title').textContent = `Title: ${book.title}`;
document.getElementById('author').textContent = `Author: ${book.author}`;
document.getElementById('year').textContent = `Year: ${book.year}`;




// Create a book object with methods
const novel = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    // Method to get a description of the book
    getDescription: function() {
        return `${this.title} was written by ${this.author} and published in ${this.year}.`;
    },
    // Method to get a summary of the book
    getSummary: function() {
        return `${this.title} is a classic novel that explores themes of racial injustice and moral growth.`;
    }
};

// Display the book's properties and methods in HTML
document.getElementById('title').textContent = `Title: ${novel.title}`;
document.getElementById('author').textContent = `Author: ${novel.author}`;
document.getElementById('year').textContent = `Year: ${novel.year}`;
document.getElementById('description').textContent = `Description: ${novel.getDescription()}`;
document.getElementById('summary').textContent = `Summary: ${novel.getSummary()}`;