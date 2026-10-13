import add from "./math.js";

const myName ="Lwin";

{
const myName = "Inner Scope Lwin";
const output = `My name is ${myName}`;
console.log(output);
}
console.log(myName);
const result = add(1, 2);
console.log(`${result}`);
