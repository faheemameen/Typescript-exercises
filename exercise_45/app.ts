

function getCar(manufacturer:string, model:string, ...properties:[string,any][]) :any {
    const car:any = {
        manufacturer,
        model,
    }
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;

}

const myCar = getCar("Honda","Civic",["color","red"],["optionalFeature","Sunproof"]);
console.log(myCar);