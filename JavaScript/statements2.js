//PART-2 OF JAVASCRIPT (part 1 is theory)

//if statement

let color = "green";

if(color == "red"){
    console.log("stop");
}
if(color == "yellow"){
    console.log("slow down");
}
if(color == "green"){
    console.log("go");
}

//else-if statement

let marks = 70;
if(marks >= 80){
    console.log("A");
}
else if(marks >60){
    console.log("B"); //doesnt run the next elseif statement if the current one is true
}
else if(marks>=90){
    console.log("A++");
}

//else staement

let colour = "white";

if(colour === "red"){
    console.log("stop");
}
else if(colour === "yellow"){
    console.log("slow down");
}
else if(colour === "green"){
    console.log("go");
}
else{
    console.log("traffic light is broken")
}

//switch statement

let light="red";
switch(light) {
    case "yellow":
        console.log("slow down");
        break;  //if break is not mentioned then it will run all the cases
    case "green":
        console.log("go");
        break;
    case "red":
        console.log("stop");
        break;
    default:
        console.log("traffic light is broken");
}


//practice question

let size = "S";
if(size==="XL"){
    console.log("250 rs");
}
else if(size==="L"){
    console.log("2150 rs");
}
else if(size==="M"){
    console.log("100 rs");
}
else{
    console.log("50 rs")
}

//logical operators

let str="apple";
if(str[0] == "a" && str.length > 3){
    console.log("Good string");
}
else{
    console.log("Bad string");
}

//truthy and falsy values

let num = " ";
if(num){
    console.log("num is truthy");
    }
    else{
        console.log("num is falsy");
        }

//practice question

let day= 4;
switch(day) {
    case 1:
        console.log("monday");
        break;  //if break is not mentioned then it will run all the cases
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
        case 5:
            console.log("friday");
            break;
            case 6:
        console.log("saturday");
        break;
        case 7:
        console.log("sunday");
        break;
        default:
            console.log("invalid day");
}

//alerts and prompts
// alert("this is an alert");
// console.error("this is an error")
// console.warn("this is a warn")

// let name = prompt("enter your name");
// console.log(name)

// Assignment Questions
// question 1
let num1 = 7;
if(num / 10){
    console.log("good");
}
else{
    console.log("bad");
    }

// question 2
// let userName = prompt("enter your name");
// let age = prompt("enter your age");
// let output = alert(`${userName} is ${age} years old`);
// console.log(output);

// question 3
let x = 40;
let y = 10;
let z = 90;
if(x > y && x > z){
    console.log("x is the largest number");
    }
    else if(y > x && y > z){
        console.log("y is the largest number");
        }
        else{
            console.log("z is the largest number");
            }




