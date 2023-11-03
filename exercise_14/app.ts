//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestArr2:string[]= ["Ahmad","Hassan","Raza"];

let canNotAttend:string = "Hassan";

//Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(canNotAttend + " " +"can not make it, for a dinner");


//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guestArr2[guestArr2.indexOf(canNotAttend)] = "Arslan";



// Print a second set of invitation messages, one for each person who is still in your list.
guestArr2.map((item)=>{
    console.log(`Dear ${item}, you are corodially invired to a dinner`);
})