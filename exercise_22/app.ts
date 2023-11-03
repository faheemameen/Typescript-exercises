//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program

function createFruit(name:string,color:string,taste:string){
    return{
        name,
        color,
        taste
    }
}
const fruits = [
    createFruit("apple","red","sweet"),
    createFruit("mango","yellow","sweet"),
    createFruit("grapes","green","sour")
]

// const invalidIndex:number = 5;
// console.log(`Fruit at index ${invalidIndex}:`,fruits[invalidIndex]);

console.log(fruits[4]);//undefined


fruits.forEach((fruit,i)=>{
    console.log(`${i}: Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`);
})