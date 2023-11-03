//Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • . • Add a line at the end of your program stating what these animals have in common.


let animals:string[] = ["cat","dog","rabbit"];

//print out the name of each animal using for loop
for (const name of animals) {
    console.log(name);   
}

//Modify your program to print a statement about each animal, such as A dog would make a great pet
animals.forEach((animal)=>{
    console.log(`A ${animal} would make a great pet`);
})

// You could print a sentence such as Any of these animals would make a great pet!
console.log(`${animals.join(",")} would make a great pet `);