/* JavaScript modules are standalone units of code 
that you can reuse again and again. */
export const informalGreeting = (person) => {
    console.log(`Hello, ${person}`);
}
export const formalGreeting = (person) => {
    console.log(`Good day, ${person}`);
}
export const greeting = () => {
    console.log("Howdy!");
}
export default greeting;