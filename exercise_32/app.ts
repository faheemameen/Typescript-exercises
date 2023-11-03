//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//Make a list of five or more usernames called current_users.
//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users = ["admin","john","bobby","eric","ali"];

let new_users = ["Raza","Ali","afridi","john","lala"];

//1 way
new_users.forEach((users)=>{
    current_users.includes(users.toLowerCase())?
    console.log(`Username ${users} is already taken.Please enter a new user name`):
    console.log(`Username ${users} is available`);
})



//2nd way
function checkUsernames (current_users:string[],new_users:string[]){
    let loweredCurrentUser = current_users.map((users)=>users.toLowerCase());

    for (const names of new_users) {
        let loweredNewUser = names.toLowerCase();
       if(loweredCurrentUser.includes(loweredNewUser)){
          console.log(`Username ${names} is already Taken.Please enter a new username`);
        }else{
            console.log(`Username ${names} is availale`);
        }

        
    }
}
checkUsernames(current_users,new_users);