// LOOPS
//for loop
//print 3 table 

for(i=3; i<=30; i=i+3){
    console.log(i);
}
//backwards
for(i=30; i>=3; i=i-3) {
    console.log(i);
}
//printing a table by users input
//  let x = prompt("enter a number");
//  x = parseInt(x); //to convert any type of data into an int we use parse
//  for(i=x; i<=x*10; i=i+x){
//     console.log(i);
//  }
 
 //nested loops
 for(i=1; i<=5; i++){
    console.log(`outerloop ${i}`);
    for(j=1; j<=5; j++){
        console.log(j);
        }
        }

//while loop

let n = 0;
while(n<=10){
    console.log(n);
    n++;
}
let k = 1;
while(k<=10){
    console.log(k);
    k=k+2;
}

// favorite movie game
// const favMovie = "ENE";
// let userMovie = prompt("Enter movie name");
// while((userMovie != favMovie) && (userMovie != "quit"))
// {
//     userMovie = prompt("sorry wrong input, please try again!");

// }
// if(userMovie == favMovie)
// {
//     console.log("you guessed it!");
//     }
//      else {
//         console.log("you quit the game");
//     }

//loops with arrays
let fruits = ["mango","banana","apple","litchi","orange"];
// for(let i = 1; i<fruits.length; i=i+2) {
//     console.log(i, fruits[i]);
// }
//reverse the array
 for(let i = fruits.length-1; i>=0; i--) {
    console.log(i, fruits[i]);
    }

//loops with nested arrays
let students = [["priya", 95],["vikas",99],["vamshi",98]];
for(let i = 0; i<students.length; i++){
    for(j =0; j<students[i].length; j++){
        console.log(i,students[i][j]);
}
}

// for of loops
let colors = ["red","green","blue","pink"];
for(let color of colors){
    console.log(color);
    }
for(char of "hello"){
    console.log(char);
    }
// for of loops on nested arrays
let heroes = [["batman","ironman","superman"],["thor","dc","wonderwoman"]];
for(let hero of heroes){
    for(name of hero){
        console.log(name);
    }
}


//to-do app (only JS)

// let todo = [];

// let req = prompt("please enter your request");

// while(true){
//     if(req == "quit"){
//         console.log("Quitting app");
//         break;
//     }
//     else if(req == "list"){
//         for( let i = 0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//     }
//     else if(req == "add"){
//         let task = prompt("enter the index of the item you want to add");
//         todo.push(task);
//         console.log("task added");
//     }
    
//     else if(req == "delete"){
//         let inx = prompt("enter the index of the item you want to delete");
//         todo.splice(inx, 1);
//         console.log("task deleted");
//     }
//     else{
//         console.log("invalid request");
//         }
//     req = prompt("please enter your next request");
// }

//Assignment problems

let arr = [1,2,3,5,6,2,3];
num = 2;
for(let i=0; i<arr.length; i++){
    if(arr[i] == num){
    arr.splice(i, 1);
    }
}
console.log(arr);

let l = 5;
let factorial = 1;
for(let i = 1; i<=l; i++){
    factorial = factorial * i;
    }
    console.log(factorial);
    
let arra=[2,5,10,4,2,7,1,9];
let largest=0;
for(leti=0;i<=arra.length;i++){
    if(largest<arra[i])
        {
            largest=arra[i];

        }
    }
    console.log(largest);

