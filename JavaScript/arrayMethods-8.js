// array methods
//forEach
let arr = [1, 2, 3, 4, 5];

let print = function(el) {
    console.log(el);
}
arr.forEach(print);

//storing objects in an array

let arr1 = [
    {
    name: 'John',
    marks: 90,
    },
    {
    name: 'Jane',
    marks: 80,
    }, 
    {
    name: 'Jack',
    marks: 70,
    }
];
arr1.forEach(student => {
    console.log(student.name);
});

//map method
let num = [1, 2, 3, 4, 5];

let double = num.map((el) => {
    return el * 2;
});


let students = [
    {
    name: 'John',
    marks: 90,
    },
    {
    name: 'Jane',
    marks: 80,
    }, 
    {
    name: 'Jack',
    marks: 70,
    }
];
let gpa = students.map((el) => {
    return el.marks/10;
});

//filter method
// let numbers = [1, 2, 3, 4, 5, 10, 7, 8, 9, 11];
// let even = numbers.filter((el) => {
//     return el % 2 !== 0;
// });

//Every and Some method
// every method is like logical AND and some method is like logical OR
let numbers1 = [1, 2, 3, 4, 5, 10, 7, 8, 9, 11];
let ans = numbers1.every((el) => {
    return el % 2 !== 0;
});
let numbers2 = [12, 2, 4, 10, 8];
let answer = numbers2.every((el) => {
    return el % 2 == 0;
});

//Reduce method has two parameters, first is the accumulator and second is the current element
let numbers3 = [1, 2, 3, 4, 5];
let finalVal = numbers3.reduce((res, el) => {
    console.log(res); // res takes 0 by default and el is the current element
    return res + el;
    });
    console.log(finalVal);

//Maximum in array - traditional method
// let numbers4 = [1, 2, 3, 4, 5];
// max = 0;
// for(let i=0; i<numbers4.length; i++){
//     if(numbers4[i] > max){
//         max = numbers4[i];
//         }
//         }
//         console.log(max);

//using reduce method
let numbers4 = [1, 2, 3, 4, 5, 4];
let max = numbers4.reduce((res, el) => {
    if(el > res){  //same way we can find min value also by changing the condition as el < res
        return el;
        }
        return res;
        });
        console.log(max);

//default parameters
function sum(a, b=2) {
    return a+b
}
console.log(sum);

//Spread method allows you to expand elements of an array, object, or iterable into individual elements.
//array
let n = [1, 2, 3, 4, 5];
console.log(...n);
//string
let m = "apnacollege";
console.log(...m);

//spread(array literals)
let x = [1,2,3,4,5];
let newArr = [...x];
console.log(newArr);

let y = [..."helloworld"];
console.log(y);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];
let numbers = [...odd , ...even];

//object literals

let data = {
    email: "sdfbefgerifegri@gmail.com",
    password:"efgryf",
};
let dataCopy = {...data, id:1234};

//Rest method is the opposite of spread method. It allows you to pass a variable number of arguments to a function.
function sumAll(...args) {
    return args.reduce((sum,el) => sum+el);
    }

function minimum(msg,...args) { //different arguments sholuld be written before rest arguments
    console.log(msg);
    return args.reduce((res,el) => el < res ? el : res);
}

//Destructuring - assigning array values to new variables
let person = ["Vikas", "Sripriya", "Vamshi", "Vijju", "Manisha", "Roshini"];
let [winner, runnerUp, ...manymore] = person; //rest

//Destructuring(objects)
const stu = {
    name:"sripriya",
    age:20,
    class:"MCA",
    subjects:["java","python","web"],
    username: "weuyrg34u",
    password:"abcd",
    // city: "chennai" 
};
let {username : user, password: pass, city:place ="Hyd",...rest} = stu;

//Assignment

let arr2 = [1,3,5,5,7,8,9];
let square = arr2.map((el)=>
    {
        return el*el;
    });
    console.log(square);
let sums = arr2.reduce((sums,el)=>
    {
        return sums+el;
        });
let avg = sums/arr2.length;

let z = [1,2,3,4,5];
let summ = z.map((el) =>{
    return el+5;
})

let arr3 = ["apnacollege"];
let upper = arr3.map(el => el.toUpperCase());
