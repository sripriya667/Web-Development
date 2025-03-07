//this keyword in javascript refers to an object that is executing the current piece of code
const student = {
    name: "sripriya",
    eng: 85,
    math: 90,
    science: 78,
    getAvg() {
        console.log(this);  //student object
        let avg = (this.eng + this.math + this.science) /3;
        console.log(avg);
    }
}
//try & catch
// console.log("hello");
// console.log("hello");
// console.log(a);  // the next line will throw an error
// console.log("hello");
// console.log("hello");

//to over come the above the problem we use try & catch
try {
    console.log(a);
    } catch (error) {
        console.log("error is there"); // this will not throw the error
        }
        console.log("hello");
         console.log("hello");
//Arrow functions
//arrow functions are used to define small functions
const add = (a, b) => {
    console.log(a+b);
};
const cube = n => {  //for single arg we can remove the parenthesis
    console.log(n*n*n);
};
const pow = (a, b) => {
    console.log(a**b);
};
const hello = () => {   
    console.log("hello world");
    };
    // const hel =  => {            //throws an error because without paranthesis we can't return
    //     console.log("hello world");
    //     };

//implicit return iun arrow function
const mul = (a, b) => a*b;  //easy way to return arrow functions in javascript

//SetTimeout function is an in built function
// console.log("hi there!");
// setTimeout( () => {
//     console.log("Apna College");
// },4000)  // time in milli seconds 
// console.log("Welcome to");

// setTimeout 

// let id = setInterval(() => {
//     console.log("hello world");
//     }, 2000);  
//     console.log(id);
    
//     let id2 = setInterval(() => {
//         console.log("hello world");
//         }, 3000);  
//         console.log(id2);

//Assignment
const object = { 
    message:'Hello,World!',
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);



const arrayAverage = (arr) => {
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
        }
        return total/arr.length;
}
let arr = [1,2,3,4,5];
console.log(arrayAverage(arr));


const isEven = (num) => {
    if(num%2 == 0){
        return true;
    }
    else{
        return false;
        }
}
let num = 20;
console.log(isEven(num));  // true



let length = 4;
function callback(){
    console.log(this.length);
}
const obj = {
    length: 5,
    method (callback) {
        callback();
    },
};
obj.method(callback,1,2);