// Exercise Web Page Content Update
let userName = prompt("Enter your name");
// if (typeof (userName) === "string") {
//     var h1 = document.createElement("h1");
//     h1.innerText = userName;
//     h1.innerText = "Type into the input to make this text change";
//     var input = document.createElement("input");
//     input.setAttribute("type", "text")
//     document.body.innerText = "";
//     document.body.appendChild(h1);
//     document.body.appendChild(input);
// }
// Note: Type it on console log by going live server
var h1 = document.createElement("h1");
h1.innerText = "Type into the input to make this text change";
var input = document.createElement("input");
input.setAttribute("type", "text");
document.body.innerText = "";
document.body.appendChild(h1);
document.body.appendChild(input);
input.addEventListener("change", function () {
    // console.log(input.value);
    h1.innerText = input.value;
})

// Another program on console
var h1 = document.querySelector('h1');
var arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
];
function handleClicks() {
    switch (h1.innerText) {
        case arr[0]:
            h1.innerHTML = arr[1];
            break;
        case arr[1]:
            h1.innerHTML = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default:
            h1.innerText = arr[0]
            break;
    }
}
/* Add an event listener
You've created an h1 variable in Task 2.
Now, use that variable to run the addEventListener() method on it.
Pass two arguments to the addEventListener() method: 'click' and handleClicks */
h1.addEventListener('click', handleClicks);