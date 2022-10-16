/*Take the following array:
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
Manipulate your array using various methods, such as pop(), push(), shift(), and
unshift(), and transform it into the following:
["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"] */

const theList = ['Laurence','Svekis',true,35,null,undefined,{test:'one',score:55},['one','two']];
theList[0] = 'FIRST';
console.log(theList);
theList.splice(2,6,'MIDDLE','hello World');
console.log(theList);
theList.push('LAST');
console.log(theList);