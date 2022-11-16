// Blank array
let multiplyTable = [];
let numValues = 5;
for (let i = 0; i < numValues; i++) {
    let temp = [];
    for (let j = 0; j < numValues; j++) {
        temp.push(i*j);
    }
    // console.log(temp);
    multiplyTable.push(temp);
    // console.log(multiplyTable);
}
console.table(multiplyTable);