// We have books in an array
let books = ["JavaScript", "HTML", "CSS", "TypeScript", "Solidity"];
let booksNotFound = true;
while(booksNotFound && books.length > 0){
    if(books[0] === "TypeScript"){
        console.log("Book found !");
        booksNotFound = false;
    }
    else{
        books.shift();
    }
}