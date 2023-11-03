//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let fullName:string="faheem";
 
//fullName to uppercase
//  console.log(fullName.toUpperCase());

//fullName to lowercase
// console.log(fullName.toLowerCase());


let myName:string="fAhEem";
 
//fullName2 to titlecase 
// console.log(myName.charAt(0).toUpperCase()+ myName.slice(1).toLowerCase());

let myName2:string="muHammad faHeem hOW aRe yoU";
let titleCase:string ="";

for (let i = 0; i < myName2.length; i++){
    if(i === 0 || myName2[i-1] === " " ){
        titleCase += myName2[i].toUpperCase();
    }else{
        titleCase += myName2[i].toLowerCase();
    }
}

console.log(titleCase);


export{}
