/* Create a recursive function that counts up to 10. Invoke the function with different
start numbers as the arguments that are passed into the function. The function
should run until the value is greater than 10. */

const main = function counter(num) {
    console.log(num);
    if(num < 10){
        return counter(num+1);
    }
    return;
}
main(0);