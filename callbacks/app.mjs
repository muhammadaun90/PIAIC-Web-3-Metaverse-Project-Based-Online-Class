function doSomething(callback) {
    callback();
}
const sayHi = () => console.log("Hi!");
doSomething(sayHi);

function judge(grade) {
    switch (true) {
        case grade == "A":
            console.log("You gan an", grade, ": amazing");
            break;
        case grade == "B":
            console.log("You got a", grade, ": well done");
            break;
        case grade == "C":
            console.log("You got a", grade, ": alright");
            break;
        case grade == "D":
            console.log("You got a", grade, ": ok");
            break;
        default:
            console.log("You are failed", grade, "! Repeat now");
            break;
    }
}
function getGrade(score, callback) {
    let grade;
    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
            break;
    }
    callback(grade);
}
getGrade(91, judge);