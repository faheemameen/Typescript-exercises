//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table

let guestArr3:string[]= ["Ahmad","Hassan","Raza"];
guestArr3.map((item)=>{
    console.log(`Dear ${item}, I have found a bigger dinner table`)
})

//Add one new guest to the beginning of your array
guestArr3.unshift("Arslan");
console.log(guestArr3);

//Add one new guest to the middle of your array.
let middleGuest:string = "Asfand";
let middleIndex = guestArr3.length/2;
guestArr3.splice(middleIndex,0,middleGuest);
console.log(guestArr3);

//Use append() to add one new guest to the end of your list. 
guestArr3.push("Ali");
console.log(guestArr3);


//• Print a new set of invitation messages, one for each person in your list.
guestArr3.map((item)=>{
    console.log(`Dear ${item}, you are corodially invited to a dinner`);
})