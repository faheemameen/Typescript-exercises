console.log("I can invite only two people for dinner");
var guestArr4 = ["Ahmad", "Hassan", "Raza", "Arslan", "Ali", "Asfand"];
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner
while (guestArr4.length > 2) {
    var removedGuest = guestArr4.pop();
    console.log("Dear ".concat(removedGuest, ", sorry! you are not invited to a dinner."));
}
//Print a message to each of the two people still on your list, letting them know they’re still invited
guestArr4.map(function (item) {
    console.log("Dear ".concat(item, ", you are still invited to a dinner"));
});
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
guestArr4.pop();
guestArr4.pop();
console.log(guestArr4);
