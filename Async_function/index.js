const promise = new Promise((resolve, reject) => {
    resolve("This is resolved");
})
async function doSomething() {
    const resolvedValue = await promise;
    console.log(resolvedValue);    
}
doSomething();