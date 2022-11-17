/* Practice Exercise 6.6
How are recursive functions going to help us calculate the factorial? We are going to
call the function with a lower number until we reach 0. In this exercise, we will use
recursion to calculate the factorial result of a numeric value set as the argument of a
function.
1. Create a function that contains a condition within it checking if the argument
value is 0.
2. If the parameter is equal to 0, it should return the value of 1. Otherwise, it
should return the value of the argument multiplied by the value returned
from the function itself, subtracting one from the value of the argument
that is provided. This will result in running the block of code until the value
reaches 0.
3. Invoke the function, providing an argument of whatever number you want
to find the factorial of. The code should run whatever number is passed
initially into the function, decreasing all the way to 0 and outputting the
results of the calculation to the console. It could also contain a console.log()
call to print the current value of the argument in the function as it gets
invoked.
4. Change and update the number to see how it affects the results. */

function factorial(num) {
    console.log(num);
    if (num == 0) {
        return 1;
    }
    else{
        return num*factorial(--num);
    }
}
console.log(factorial(6));