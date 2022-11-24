function doSomething(callback) {
    setTimeout(() => {
        callback("Hello");        
    }, 3000);
}
function myCall(param) {
    console.log(param);
}

doSomething(myCall);
console.log("Day starts!");

const makeToast = (cb) => {
    setTimeout(() => {
        cb("Toast done");
    }, 3000);
}
function cb1(params) {
    console.log(params);
}
makeToast(cb1);

const makeLassi = (Lassi) =>{
    setTimeout(() => {
        Lassi("Lassi is ready to serve");
    }, 5000);
}
const cb2 = (param1) => console.log(param1);
makeLassi(cb2);

const makeBiryani = (Lunch) =>{
    setTimeout(() => {
        Lunch("Biryani is ready to eat!");
    }, 15000);
}
const callback3 = (cb3) => console.log(cb3);
makeBiryani(callback3);