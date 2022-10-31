import promptSync from 'prompt-sync'
const prompt = promptSync();
let age = prompt("Enter your age");
age < 18 ? console.log("Access denied") : console.log("Permission granted");

let language = "JavaScript";
language ? console.log("YES") : console.log("NO");

let userAge = prompt("Enter your age");
let nationality = prompt("Enter your nationality");
userAge <= 18 || nationality == "Pakistani" ? console.log("You are allowed to enter") : console.log("You are not allowed"); 

let fruits = ["Mango", "Banana", "Orange", "Pineapple", "Apple"];
fruits[3] ? console.log("Available") : console.log("Not available");
fruits[6] ? console.log("Available") : console.log("Not available");
