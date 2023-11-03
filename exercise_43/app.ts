

let magicians:string[]=["Harry Potter","Eric","Ron weasley"]

function show_magicians(magician:string[]):void{
    magicians.forEach((mag)=>{
        console.log(mag)
    })
}

function make_great(magician:string[]){
    let arr:string[] = [];
    magician.map((mag)=>{
        arr.push(`The Great ${mag}`)
    })
    return arr
}
const modifyMagicianNames = make_great(magicians)
console.log(modifyMagicianNames);


show_magicians(magicians);