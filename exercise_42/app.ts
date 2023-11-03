//Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.




let magicians:string[]=["Harry Potter","Eric","Ron weasley"];

//1 way
function show_magicians(magician:string[]):void{
    magicians.forEach((mag)=>{
        console.log(mag)
    })
}
show_magicians(magicians);


function make_great(magician:string[]){
    magicians.map((mag)=>console.log(`The Great ${mag}`));
}
make_great(magicians);

//2nd Way
// function make_great(magician:string[]) {
//     magician.forEach((mag,i) => {
//         magicians[i] = `The great ${mag}`
//     })

//     return magicians
// }

// console.log(make_great(magicians));

export{}