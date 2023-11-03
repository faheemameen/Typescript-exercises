//Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
var userNames = ["John", "admin", "Bobby", "Ali", "Raza", "Bob"];
//By f
function greetings() {
    for (var _i = 0, userNames_2 = userNames; _i < userNames_2.length; _i++) {
        var name_1 = userNames_2[_i];
        if (name_1.toLowerCase() === "admin") {
            console.log("Hello ".concat(name_1, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(name_1, ", thank you for logging again"));
        }
    }
}
// greetings();
//By forEach loop
// userNames.forEach((users)=>{
//      if(users === "admin"){
//         console.log(`Hello ${users}, would you like to see a status report?`);
//      }else{
//         console.log(`Hello ${users}, thank you for logging`);
//      }
// })
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var name_2 = userNames_1[_i];
    if (name_2.toLowerCase() === "admin") {
        console.log("Hello ".concat(name_2, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(name_2, ", thank you for logging again"));
    }
}
