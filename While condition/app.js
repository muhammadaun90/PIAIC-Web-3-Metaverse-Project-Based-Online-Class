let userInput = prompt('Rating: 1 - 10, how much do you like the name Aun?');
if(userInput > 0 && userInput < 11){
    userInput = false;
}
else{
    userInput = true;
}
while (userInput) {
    userInput = prompt('On a scale of 1 - 10, how much do you the name Aun?');
    console.log(userInput);
}