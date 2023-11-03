//You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:


//Tests for equality and inequality with strings
const str1:string = "Hello World";
const str2:string = "hello world";

console.log(str1 === str2);  //false
console.log(str1 !== str2);  //true


//Tests using the lower case function
console.log(str1.toLowerCase() === str2);  //true


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1:number = 10;
const num2:number = 5;

console.log(num1 === num2);  //false
console.log(num1 !== num2);   //true
console.log(num1 > num2);     //true
console.log(num1 < num2);     //false
console.log(num1 >= num2);    //true
console.log(num1 <= num2);    //false


//Tests using "and" and "or" operators
const x:number = 10;
const y:number = 15;
const z:number = 20;

console.log(x < y && y < z); //true b/c both conditions are true
console.log(x < y && y > z); //false b/c one conditions are false

console.log(x < y || y > z);  //true b/c one condition is true
console.log(x > y || y > z);  //false b/c both condition are false

// Test whether an item is in a array

const fruits:string[] = ["apple","orange","mango"];

console.log(fruits.includes("apple"));  //true
console.log(fruits.includes("grapes"));  //false

// Test whether an item is not in a array
console.log(!fruits.includes("grapes"));  //true
console.log(!fruits.includes("apple"));  //false


export{};