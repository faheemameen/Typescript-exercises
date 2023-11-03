//Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


function describe_city(city:string,country="Pakistan"):void{
   console.log(`${city} is in ${country}`)
}
describe_city("lahore");
describe_city("Faislabad");
describe_city("london","UK");


//By arrow function
const describeCity =(city:string,country:string):string =>{
   return `${city} is in ${country}`;
}
console.log(describeCity("london","UK"));
