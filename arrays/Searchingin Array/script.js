// Searching in Array
var num = [24,53,68,101,187,64,88,99];
var input = prompt("Enter numnber to find in array");
console.log("User input ", input);
var found = false;
for(i=0; i<num.length; i++){
    if(num[i] === input){
        console.log("Found " +input + " on index " +i);
        found = true;
        break;
    }
}
if(!found){
    console.log("Not found");
}