//You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestArr2 = ["Ahmad", "Hassan", "Raza"];
var canNotAttend = "Hassan";
console.log(canNotAttend + " " + "can not make it, for a dinner");
guestArr2[guestArr2.indexOf(canNotAttend)] = "Arslan";
guestArr2.map(function (item) {
    console.log("Dear ".concat(item, ", you are corodially invired to a dinner"));
});
