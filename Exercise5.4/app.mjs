// Creating an empty array
const myTable = [];
const rows = 4;
const columns = 10;
let counter = 0;
for (let i = 0; i < rows; i++) {
    let tempTable = [];
    for (let j = 0; j < columns; j++) {
        counter++;
        tempTable.push(counter);
    }
    myTable.push(tempTable);
}
console.table(myTable);