// Ask user to enter temperature
let temp = prompt("Enter your current temperature");
// Conditions
if(temp >= 30 && temp <= 40){
    console.log("Take cap to cover your head as it's hot");
}
else if(temp >= 20 && temp <= 30){
    console.log("Do not go half sleeves");
}
else if(temp >= 10 && temp <= 20){
    console.log("Bring jacket with you");
}
else if(temp >= 0 && temp <= 10){
    console.log("Do not go outside without jacket and gloves");
}
else if(temp >= -10 && temp <= 0){
    console.log("It's too cold outside, stay home");
}
else{
    console.log("STAY HOME !!!");
}