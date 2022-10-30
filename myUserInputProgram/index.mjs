import promptSync from 'prompt-sync';
const prompt = promptSync();
var name = prompt("What is your name?");
console.log(name);
const num = prompt("Enter any number");
console.log(num);
console.log(Number(num)+4);