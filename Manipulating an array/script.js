/* Manipulating an array
Transform it into the following:
["FIRST", "Zaidi", "MIDDLE", 18, "LAST"] */

const list = ["Aun", "Zaidi", true, 32, null, undefined, {test: "JavaScript", score: 78}, ["one", "two"]];
list.shift();
console.log(list);
list.unshift("FIRST");
console.log(list);
list.splice(2,6,"MIDDLE", 18, "LAST");
console.log(list);