function addFour(a,b,c,d) {
    console.log(a+b+c+d);    
}
let num1 = [2,5];
let num2 = [5,9];
addFour(...num1, ...num2);