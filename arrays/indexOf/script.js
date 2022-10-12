let arr = [2, 5, 6, 9, 10];
// Finding index no. of element 6
let findIndex = arr.indexOf(6);
// Finding index no. of element 11
let findIndex1 = arr.indexOf(11);
// Here element 6 has 2 index but 11 is not found so it will return -1
console.log(findIndex, findIndex1);

// lastIndexOf () function will return index value of last element in an array
var books = ["JavaScript", "Rich Dad Poor Dad", "Python"];
var lastBook = books.lastIndexOf("Python");
console.log(lastBook);