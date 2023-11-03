//Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!


let favorite_pizza:string[]=["afghani","malaiboti","pepperoni"];

for (const pizza of favorite_pizza) {
    console.log(pizza);
    
}
favorite_pizza.forEach((pizza)=>{
    console.log(`I Like ${pizza} pizza`);
})

console.log(`Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes,
cheese, and often various other ingredients,
which is then baked at a high`);

console.log("I really love pizza!");