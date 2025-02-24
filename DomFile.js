// Change background color
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'pink';
});

// Add items to list
const newItemInput = document.getElementById('newItem');
const addItemButton = document.getElementById('addItemButton');
const itemList = document.getElementById('itemList');
addItemButton.addEventListener('click', function() {
    const newItemText = newItemInput.value;
    const listItem = document.createElement('li');
    listItem.textContent = newItemText;
    itemList.appendChild(listItem);
    newItemInput.value = '';
});

// Form validation
const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const message = document.getElementById('message');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (emailInput.validity.valid) {
        message.textContent = 'Email is valid!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = 'red';
    }
});

// Modal popup
const modal = document.getElementById('myModal');
const openModalButton = document.getElementById('openModalButton');
const closeSpan = document.getElementsByClassName('close')[0];
openModalButton.addEventListener('click', function() {
    modal.style.display = 'block';
});
closeSpan.addEventListener('click', function() {
    modal.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Event types demonstration
const clickButton = document.getElementById('clickButton');
const hoverText = document.getElementById('hoverText');
const inputField = document.getElementById('inputField');
clickButton.addEventListener('click', function() {
    alert('Wishing you a very Happy BirthDay');
});
hoverText.addEventListener('mouseover', function() {
    hoverText.style.color = 'blue';
});
inputField.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
});
