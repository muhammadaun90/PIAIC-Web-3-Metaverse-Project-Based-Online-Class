const myWork = [];
for (let i = 1; i < 11; i++) {
    let status = i % 2 ? true : false;
    let temp = {
        name: `Lesson ${i}`,
        status: status,
    }
    myWork.push(temp);
}
console.log(myWork);