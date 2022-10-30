const students = {
    userName: "Aun",
    rollNo: 123,
    subject: "Programming",
    language: "JavaScript"
};
// Print using for in loop
for(let key in students){
    console.log(key+ ": " + students[key]);
}
// iterating arrays using loops
const arr = ["Aun", 123, "Programming", "JavaScript"];
for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}