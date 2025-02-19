let name="Pallavi";
let age=21;
let decision=true;
let inparray=["a","b","c","d"];
let inpobject={"name":"Pallavi","age":21};
document.getElementById('variables').innerHTML +="String variable : "+name+"<br>";
document.getElementById('variables').innerHTML +="Number variable : "+age+"<br>";
document.getElementById('variables').innerHTML +="Boolean variable : "+decision+"<br>";
document.getElementById('variables').innerHTML +="Array declaration : "+inparray+"<br>";
document.getElementById('variables').innerHTML +="Object declaration : "+JSON.stringify(inpobject)+"<br>";

let number1=20;
let number2=7;
document.getElementById('arithmetic').innerHTML +="Addition : "+(number1+number2)+"<br>";
document.getElementById('arithmetic').innerHTML +="Subtraction : "+(number1-number2)+"<br>";
document.getElementById('arithmetic').innerHTML +="Multiplication : "+(number1*number2)+"<br>";
document.getElementById('arithmetic').innerHTML +="Division : "+(number1/number2)+"<br>";
document.getElementById('arithmetic').innerHTML +="Modulus : "+(number1%number2)+"<br>";

function greeting(){
    let name=document.getElementById('username').value;
    alert("welcome "+name);
}

function area(){
    let length=document.getElementById('length').value;
    let breadth=document.getElementById('breadth').value;
    let areaRectangle=length*breadth;
    document.getElementById('rectangle').innerHTML="Area of rectangle : "+areaRectangle;
}

function typefunction(){
    let input=document.getElementById('data').value;
    let inputs=Number(input); //Converting to number
    if(typeof inputs==='number' && !isNaN(inputs)){
    //checking the input if it is number or not
    document.getElementById('result').innerText="It's Number";
    }
    else{
    document.getElementById('result').innerText="It's String";
    }
}
function stringfunction(){
    let stringentered=document.getElementById('stringinput').value;
    if(typeof stringentered === 'string'){
        let stringLength = stringentered.length;  
        let upperCase = stringentered.toUpperCase(); 
        let lowerCase = stringentered.toLowerCase();
        let substring = stringentered.includes("chandu");
        let charAtFirst = stringentered.charAt(3);
        let sliced = stringentered.slice(0, 5);
        let replaced = stringentered.replace("hello", "hi");

        let resultstring="Using Methods\n"+ 
                         "length of string : "+stringLength+"\n"+
                         "Uppercase: " + upperCase + "\n" +
                         "Lowercase: " + lowerCase + "\n" +
                         "Contains 'hello': " + (substring ? 'Yes' : 'No') + "\n" +
                         "First character: " + charAtFirst + "\n" +
                         "Sliced (first 5 chars): " + sliced + "\n" +
                         "Replaced 'hello' with 'hi': " + replaced;
        document.getElementById('result1').innerText=resultstring;
    }
    else{
        document.getElementById('result1').innerText="Enter valid input"
    }
}
function arrayfunction(){
    let arrayinput = document.getElementById('inarray').value;
    let array = arrayinput.split(',').map(item => item.trim());
    let arrayLength = array.length; 
    let reversedArray = array.reverse(); 
    let firstElement = array[0]; 
    let lastElement = array[array.length - 1]; 
    let indexOfarray = array.indexOf("Pallavi");
    array.push("elephant");
    let poppedElement = array.pop();
    array.shift();
    array.unshift("elephant");

    let resultarray = "Using Array Methods\n" + 
    "Original Array Length: " + arrayLength + "\n" +
    "Reversed Array: " + reversedArray + "\n" +
    "First Element: " + firstElement + "\n" +
    "Last Element: " + lastElement + "\n" +
    "Index of 'chandu': " + (indexOfarray !== -1 ? indexOfarray : 'Not found') + "\n" +
    "Array after push, pop, shift, unshift: " + array.join(' - ') + "\n" +
    "Popped Element: " + poppedElement;
    document.getElementById('result2').innerText = resultarray;
}
function objectfunction(){
    let objectInput = document.getElementById('inobject').value;
    try{
        let object = JSON.parse(objectInput);
        let Keys = Object.keys(object); 
        let Values = Object.values(object); 
        let check = object.hasOwnProperty('city'); 
       
        let resultObject = "Using Object Methods <br>" +
        "Object Keys: " + Keys.join(', ') + "<br>" +
        "Object Values: " + Values.join(', ') + "<br>" +
        "Has 'city' property: " + (check ? 'Yes' : 'No');
        document.getElementById('result3').innerHTML = resultObject;
    } catch(e){
        document.getElementById('result3').innerText = "Invalid object format.";
    }
}