//Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again


let userNames:string[]=["John","admin","Bobby","Ali","Raza","Bob"];

//By for of loop
    for (const name of userNames) {
        if(name.toLowerCase() === "admin"){
            console.log(`Hello ${name}, would you like to see a status report?`)
        }
        else{
            console.log(`Hello ${name}, thank you for logging again`)
        }
    }



// By forEach loop
userNames.forEach((users)=>{
     if(users === "admin"){
        console.log(`Hello ${users}, would you like to see a status report?`);
     }else{
        console.log(`Hello ${users}, thank you for logging`);
     }
})


export{}

