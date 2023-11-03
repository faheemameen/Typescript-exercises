//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//If the list is empty, print the message We need to find some users!
//Remove all of the usernames from your array, and make sure the correct message is 
var userNames = ["John", "admin", "Bobby", "Ali", "Raza", "Bob"];
userNames.forEach(function (users) {
    if (users === "admin") {
        console.log("Hello ".concat(users, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(users, ", thank you for logging again"));
    }
});
if (!userNames.length) {
    console.log("We need find some users");
}
// userNames = []  //1 way
//2nd way
while (userNames.length > 0) {
    userNames.pop();
}
if (!userNames.length) {
    console.log("we need find some users");
}
;
