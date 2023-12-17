/*Task 1:
Write a function named letterFinder that accepts two parameters: word and match.
Task 2:
Code a 'for' loop inside the function's body. 
The for loop's counter should start at zero, increment by 1 on each iteration and 
exit when the counter variable's value is equal to the length of the word parameter.
Task 3:
Add an if statement inside the for loop whose condition works as follows:
Access each of the letters inside the passed in word using the counter variable, with word[i]. 
Check if the current word[i] is equal to the value of match.
Task 4:
console.log the following inside the body of the if statement: console.log('Found the', match, 'at', i).
Task 5:
Write the else condition. Here you'll just console log the following: console.log('---No match found at', i).
Task 6:
Call the letterFinder and pass it as its first argument as the string "test" and as its second argument, the string "t".
Your output should be the following:
Found the t at 0
---No match found at 1
---No match found at 2
Found the t at 3 */

function letterFinder(word, match) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else{
            console.log('---No match found at', i);
        }
    }
}
letterFinder("test", "t");


// Another example from Coursera
function addTwoNums(a, b) {
    try {
        if (typeof (a) != 'number') {
            throw new ReferenceError('the first argument is not a number');
        } else if (typeof (b) != 'number') {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a+b);
        }
    } catch (err) {
        // console.log(err);
        console.log("Error!", err);
    }
}
addTwoNums(5,"2");
console.log("It still works");

// Working again with the above 1st program here
function letterFinder(word, match) {
    let condition1 = typeof(word) === "string" && word.length >= 2;
    let condition2 = typeof(match) === "string" && match.length == 1;
    if (condition1 && condition2) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log('Found the', match, 'at', i);
            } else{
                console.log('---No match found at', i);
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.");
    }
}
letterFinder(5, 4);
letterFinder("cat", "c");

var result = null;
console.log(result);

try {
    console.log("hello");
} catch (err) {
    console.log("Good bye");
}

var x;
if(x === null) {
  console.log("null");
} else if(x === undefined) {
  console.log("undefined");
} else {
  console.log("ok");
}

throw new Error();
console.log("Hello");