//Object literals are used to store complex data in a structured way instead of arrays
const person = {
    name: "Sripriya",
    age: 20,
    city: "Hyderabad",
    
    };

    console.log(person);
//nested objects
const data = {
    priya :{
        grade:"O",
        age:20,
    },
    vikas : {
        grade:"A",
        age:21,
    },
    vamshi: {
        grade:"B",
        age:23,
    }
}
console.log(data);

//array of objects
const students = [
    {
        name: "Sripriya",
        age: 20,
        grade: "A"
    },
    {
        name: "Vikas",
        age: 21,
        grade: "A"
    },
    {
        name: "Vamshi",
        age: 23,
        grade: "O"
    },

];
console.log(students);

//Math Object - creating a game using random number function
//random function always gives you the values between 0 and 1 

// const max = prompt("Enter the maximum number");

// const random = Math.floor(Math.random() * max) + 1;  //so to give any values we want we have to add 1

// let guess = prompt("guess the number");
// while(true){
//     if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }
//     else if(guess == random){
//         console.log("you are right! random number was", random);
//         break;
//     }
//     else if(guess < random){
//         guess = prompt("too low, guess again");
//     }
//     else{
//         guess = prompt("too high, guess again");
//     }
// }

// Assignment - random number generating a dice roll

// const num = prompt("enter the number");

// const dice = Math.floor(Math.random() * num) + 1;
// let value = prompt("guess the number");
// while(true){
//     if(value == "quit"){
//         console.log("you quit");
//         break;
//         }
//         else if(value == dice){
//             console.log("you are right! random number was", dice);
//             break;
//             }
//             else if(value < dice){
//                 value = prompt("too low, guess again");
//                 }
//                 else{
//                     value = prompt("too high, guess again");
//                     }
//                     }

// create an object representing a car hat stores following data
const car = {
    name:"audi",
    model:"xbsiu",
    color: "red",
};
console.log(car);