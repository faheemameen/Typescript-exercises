//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var bouquet = {
    name: "spring delight",
    price: 250,
    description: "beatiful arrangement of spring flowers"
};
//define an array of objects
var bouquets = [];
//pushing multiple objects
bouquets.push(bouquet);
bouquets.push({ name: "Summer bliss", price: 400, description: "Beautiful arrangement of Summer flowers" });
bouquets.push({ name: "Red Hot", price: 600, description: "Beautiful arrangement of Red hot flowers" });
// console.log(bouquets);
function displayBouquet(bouquets) {
    // for(let i = 0; i < bouquets.length ; i++){
    // console.log(bouquets[i].name)
    // }
    for (var _i = 0, bouquets_1 = bouquets; _i < bouquets_1.length; _i++) {
        var i = bouquets_1[_i];
        console.log("\n        title: ".concat(i.name, "\n        price: ").concat(i.price, "\n        description: ").concat(i.description, "\n        ---------------\n"));
    }
}
// displayBouquet(bouquets);
function object(obj) {
    this.fullName = obj.fullName,
        this.age = obj.age;
}
var legend = new object({ fullName: "Bobby", age: 25 });
console.log(legend);
