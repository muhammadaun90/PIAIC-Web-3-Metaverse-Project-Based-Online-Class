function doSomething(callback) {
    callback();
}
const sayHi = () => console.log("Hi!");
doSomething(sayHi);