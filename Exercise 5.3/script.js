let myWork = [];
for (let i = 0; i < 10; i++) {
    let status = i % 2 ? true : false;
    let temp = {
        name: `Lesson ${i}`,
        status: status,
    }
    myWork.push(temp);
}
console.log(myWork);