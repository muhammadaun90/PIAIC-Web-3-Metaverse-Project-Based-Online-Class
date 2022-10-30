// Creating an empty array 
const myTable = [];
const rows = 10; // no. of rows
const columns = 5; // no. of columns
let counter = 0;
for(let i = 0; i < rows; i++){
    let tempTable = [];
    for(let j = 0; j < columns; j++){
        counter++;
        tempTable.push(counter); // push counter values to tempTable
    }
    myTable.push(tempTable); // push temp array to main table
}
// Showing output as a table using console.table() method
console.table(myTable);