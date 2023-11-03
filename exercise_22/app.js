//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program
function createFruit(name, color, taste) {
    return {
        name: name,
        color: color,
        taste: taste
    };
}
var fruits = [
    createFruit("apple", "red", "sweet"),
    createFruit("mango", "yellow", "sweet"),
    createFruit("grapes", "green", "sour")
];
// const invalidIndex:number = 5;
// console.log(`Fruit at index ${invalidIndex}:`,fruits[invalidIndex]);
console.log(fruits[4]); //undefined
fruits.forEach(function (fruit, i) {
    console.log("".concat(i, ": Name: ").concat(fruit.name, ", Color: ").concat(fruit.color, ", Taste: ").concat(fruit.taste));
});
