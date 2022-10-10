// For loop
var num3 = parseInt (prompt("Enter any number"));
for (var i = 1; i <= 10; i++){
    console.log(num3+" x " + i + " = " + (num3*i)); //Any table
}

// Checking prime number using for loop
let num5 = parseInt(prompt("Enter any number"));
var isPrime = true;
for (i = 2; i < num5; i++){
    let result = num5 % i;
    if (result == 0){
        console.log("Number is not prime = " +num5 + " divisible by " + i);
        isPrime = false;
        break;
    }
}
if (isPrime){
    console.log("Number is Prime " +num5);
}

// Nested loops
for (var i=0; i<3; i++){
    for (j=0; j<2;j++){
        console.log("I "+i+ " J "+j);
    }
}