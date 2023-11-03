// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ["Harry Potter", "Eric", "Ron weasley"];
function show_magicians(magician) {
    magicians.forEach(function (mag) {
        console.log(mag);
    });
}
show_magicians(magicians);
