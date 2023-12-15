alert("Hello Syed Muhammad Aun Zaidi"); //alert
console.log("Hello Aun"); //console
document.write("Hello Aun Zaidi"); //document.write
// Variable declaration & initialization
var university = "Ilma University";
var isFeePaid = true;
var cgpa = 3.22;
var result = true;
console.log(university);
console.log(isFeePaid);
console.log(cgpa);
console.log(result);
console.log(typeof university);
console.log(typeof isFeePaid);
console.log(typeof cgpa);
let language = "JavaScript";
let message = `Let's learn ${language}`;
console.log(message);
var a = 2;
a+=3;
console.log(a);
var firstName = "Muhammad";
var lastName = "Aun";
var fullName = firstName + " " + lastName;
console.log(fullName);
var age = prompt("What's your age"); // Asking input
var num = 5;
var sum = parseInt(age) + num;
console.log(sum);
let address = null;
console.log(typeof address); // typeof null is object
let name1 = "Aun";
var age = 32;
var language1 = "JavaScript";
var canYouCode = true;
let message1 = `Hello my name is ${name1} , I am ${age} years old and I can code ${language1}:
${canYouCode}`; // Template literal
console.log(message1);
// Symbol
let str1 = "JavaScript is fun";
let str2 = "JavaScript is not fun";
console.log("These two symbols are the same:", str1 === str2);
let sym1 = "Zain is playing with 2 cars";
let sym2 = "Zain is playing with 2 cars";
console.log("These two symbols are the same:", sym1 === sym2);
// Undefined
let yourName;
console.log(yourName);
// if we add two different data types
var r = "Aun";
var t = 123;
console.log(r+t);
// Modulus
let num1 = 20;
let num2 = 3;
let result1 = num1 % num2;
console.log(`${num1} % ${num2} = ${result1}`);
// Unary opeartors
let nr1 = 4;
let nr2 = 5;
let nr3 = 2;
console.log(nr1++ + ++nr2 * nr3++);
// if else conditions
var marks = prompt("Enter your marks");
if (marks > 79 && marks < 101){
    console.log("Your grade is A+");
    if (marks > 89){
        console.log("You are eligible for Reward");
    }
}
else if (marks > 69 && marks < 80){
    console.log("Your grade is A");
}
else if (marks > 59 && marks < 70){
    console.log("Your grade is B");
}
else if (marks > 49 && marks < 60){
    console.log("Your grade is C");
}
else if (marks > 39 && marks < 50){
    console.log("Your grade is D");
}
else if (marks > 32 && marks < 40){
    console.log("Your grade is E")
}
else {
    console.log("Your grade is Fail");
}