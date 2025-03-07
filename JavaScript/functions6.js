function hello(){
    console.log("Hello, World!");
}
hello();

function printName(){
    console.log("sripriya");
    console.log("20 years");
}
printName();

function print1to5(){
    for( let i = 1; i <= 5; i++){
        console.log(i);
}
}
print1to5();

function isAdult(){
    let age = 68;
    if(age >=18){
        console.log("You are an adult");
        }else{
            console.log("You are not an adult");
            }
}
isAdult();

//rolling dice using functions with random method
function rollDice(){
    let num = Math.floor(Math.random() * 6) + 1;
    console.log("You rolled a " + num);
    }
    rollDice();
    rollDice();
    rollDice();
    rollDice();

//functions with arguments 
function greet(name, age){
    console.log(`${name},s age is ${age}`); 
    }
    greet("sripriya", 20);
    greet("Vikas", 21);
    greet("sripriya");
    greet( 20); // order of arguments are important so cant skip the first argument

//calculate avg of three numbers
function calculateAverage(num1, num2, num3){
    let average = (num1 + num2 + num3)/3;
    console.log("The average is " + average);
    }
    calculateAverage(10, 20, 30);

//Multiplication of a table
function printTable(num){
    for(let i = num; i<=10*num; i=i+num){
        console.log(i);
        }
    }
    printTable(5);

//return keyword - stops the execution of a function and returns a value
function add(a, b){
    return a + b;
    console.log("hello"); //never prints the 
    }

console.log(add(3,5));

//create a function that returns sum of numbers 1 to n
function sumOfNumbers(n){
    sum = 0;
    for(let i=1; i<=n; i++){
        sum = sum+i;
    }
    return sum;
}
// console.log(sumOfNumbers(10));

//create a function that returns the concatenation of all strings in an array
let str = ["hi","hello","bye"];
function concat(str){
    let result = ""; 
    for(let i=0; i<str.length; i++){
        result = result + str[i];
    }
    return result;
}
console.log(concat(str));

//scope - function scope,block scope and lexical scope
function outer(){
    let x = 10;
    let y = 20;
    function inner(){
        console.log(x);
    }
    inner();
}

//what will be the output
let gret ="hello";  //global scope

function changeGreet(){
    let gret = "namaste";  
    console.log(gret); //function scope
    function innerGreet() {  
        console.log(gret);//lexical scope
    }
    innerGreet(); 
}
console.log(gret);
changeGreet();

//Function expressions
 let name = function(a, b){
    return a+b;
 }

 let helo = function(){
    console.log("hello");
 }
 helo = function(){
    console.log("namaste");
 }

 //Higher order functions - a function takes another function as arguments
 function multipleGreet(func, count) {
    for( let i=0; i<count; i++){
        func();
        }
 }
 let x = function(){
    console.log("hello");
    }
    multipleGreet(x, 1000);

//Higher order function (return)

function oddOrEvenFactory (request) {
     if (request == "odd") {
        return function(n) {
            console.log(!(n%2==0));
     }
    }
    else if (request == "even") {
        return function(n) {
            console.log(n%2==0);
            }
    }
    else {
        console.log("wrong request");
    }
}
//methods
const calculator = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
};

//Assignment questions

let arr = [10,2,4,6,7,9,6,3];
let num = 6;

function getElement(arr,num) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
            }
            }
}

