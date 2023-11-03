"use strict";
//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
var fullName = "faheem";
//fullName to uppercase
//  console.log(fullName.toUpperCase());
//fullName to lowercase
// console.log(fullName.toLowerCase());
var myName = "fAhEem";
//fullName2 to titlecase 
// console.log(myName.charAt(0).toUpperCase()+ myName.slice(1).toLowerCase());
var myName2 = "muHammad faHeem hOW aRe yoU";
// let titleCase:string =""
//1 way
// for (let i = 0; i < myName2.length; i++){
//     if(i === 0 || myName2[i-1] === " " ){
//         titleCase += myName2[i].toUpperCase();
//     }else{
//         titleCase += myName2[i].toLowerCase();
//     }
// }
// console.log(titleCase);
// myName2.split(" ");
// console.log(myName2);
function titleCase(str) {
    // for (let i = 0; i < str.length; i++){
    str = str.toLowerCase().split(" ");
    console.log(str);
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        // console.log(str);
    }
    return str.join(' ');
}
titleCase("hOw are you fine baby");
