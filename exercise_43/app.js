var magicians = ["Harry Potter", "Eric", "Ron weasley"];
function show_magicians(magician) {
    magicians.forEach(function (mag) {
        console.log(mag);
    });
}
function make_great(magician) {
    var arr = [];
    magician.map(function (mag) {
        arr.push("The Great ".concat(mag));
    });
    return arr;
}
var modifyMagicianNames = make_great(magicians);
console.log(modifyMagicianNames);
show_magicians(magicians);
