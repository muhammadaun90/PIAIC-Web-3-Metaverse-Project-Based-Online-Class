let counter = 0;
const increment = (value) => {
    return new Promise(resolve => {
        setTimeout(() => {
            counter++;
            resolve(`value = ${value} counter = ${counter}`)
        }, 1000);
    })
}
async function asyncFunction(value) {
    console.log(`value = ${value} counter = ${counter}`);
    const resolvedValue = await increment(value);
    console.log(resolvedValue);
}
for (let i = 1; i < 11; i++){
    asyncFunction(i);   
}