//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const bouquet ={
    name:"spring delight",
    price:250,
    description:"beatiful arrangement of spring flowers"
}

//define an array of objects
let bouquets:Array<typeof bouquet>=[];

//pushing multiple objects
bouquets.push(bouquet);
bouquets.push({name:"Summer bliss",price:400,description:"Beautiful arrangement of Summer flowers"});
bouquets.push({name:"Red Hot", price:600, description:"Beautiful arrangement of Red hot flowers"});

// console.log(bouquets);

function displayBouquet(bouquets:Array<typeof bouquet>) {
    // for(let i = 0; i < bouquets.length ; i++){
    // console.log(bouquets[i].name)
    // }

    for (const i of bouquets) {
        console.log(`
        title: ${i.name}
        price: ${i.price}
        description: ${i.description}
        ---------------\n`)
    }
}
displayBouquet(bouquets);

//2nd way
function MakeObject(obj:{fullName:string,age:number}){
    this.fullName = obj.fullName,
    this.age = obj.age
}

var student = new MakeObject({fullName:"Bobby",age:25})
console.log(student);