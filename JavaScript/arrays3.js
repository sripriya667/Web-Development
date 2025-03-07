//ARRAYS IN JS

//saame type of datatype in arrays
let arr = [1,2,3,4];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);

//multiple datatypes

let arrMul = ["sripriya",20, 3.14];
console.log(arrMul);
console.log(arrMul.length);
console.log(arrMul[0]);
console.log(arrMul[0][0]);  //first bracket returns the first element of the array and second bracket returns the first character of the string
console.log(arrMul[0].length);

//arrays are immutable in JS

let fruits = ["mango","watermelon", "pineapple"];
console.log(fruits.length);

//push & pop methods adds or deletes the last element of the array
fruits.push("banana");
console.log(fruits.length);
console.log(fruits);
fruits.pop("mango");
console.log(fruits);

//shift and unshift methods adds or deletes the first element of the array
console.log(fruits.unshift("grapes"));
console.log(fruits);
console.log(fruits.shift());
console.log(fruits); //

// inderOf () returns the index of the first element of the array if not present then returns -1
console.log(fruits.indexOf("grapes"));
console.log(fruits.indexOf("watermelon"));
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("mango"));
//includes () returns true if the element is present in the array otherwise returns false
console.log(fruits.includes("grapes"));
console.log(fruits.includes("watermelon"));

//concatenation of arrays
let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));
console.log(arr1.concat(7,8,9));
console.log(arr1); //doesnt change the original array

//reverse of an array
let arr3 = [1,2,3,4,5];
console.log(arr3.reverse());
console.log(arr3); //changes the original array

console.log(arr3.slice(2));
console.log(arr3.slice(2,4));
console.log(arr3.slice(-2));
console.log(arr3); //doesnt change the original array

//splice () method - (removes,replaces and adds elements) and also changes the original array
let cars = ["audi","bmw","benz","ferrari"];
console.log(cars.splice(1,1));
console.log(cars);
console.log(cars.splice(1,1,"toyota","ford"));
console.log(cars);
console.log(cars.splice(1,0,"toyota","ford"));
console.log(cars);
console.log(cars.splice(1,2,"gwagon", "skoda"));
console.log(cars);

//sorting of an array
console.log(cars.sort());
console.log(cars); //changes the original array

//Practice questions using splice method

let months = ["january","july","march","august"];
console.log(months.splice(0,2,"july","june"));
console.log(months);

let lang = ["c","c++","html","javascript","python","java","c#"];
console.log(lang.reverse().indexOf("javascript"));

//array reference - address of the array
let arr4 = [1,2,3,4,5];
// let arr5 = arr4;
// console.log(arr4 === arr5); //true
let arr5 = [1,2,3,4,5];
console.log(arr4 === arr5); //false

//constant arrays - we can change the arrays values even after assigning constant, but not the array itself
const arra = [1,3,4,6];
console.log(arra.push(8));
console.log(arra);

//arra = [1,3,4,6,8] - this will throw an error because we are trying to change the array itself which is not allowed

//Nested arrays  or  2-d arrays
let nested = [[1,2],[3,4],[5,6]];
console.log(nested);
console.log(nested[2][1]);
console.log(nested.length);

//practice question
let game = [['x',null,'O'],[null,'X',null],['O',null,'X']];
console.log(game);
console.log(game[0]);
console.log(game[0][1]='O');
console.log(game);

//Assignment of arrays

let arr6 = [7,9,0,-2];
console.log(arr6.splice(3));
console.log(arr6);
let arr7 = [7,9,0,-2]
console.log(arr7.splice(0,1));
console.log(arr7);

let st = "  hello  ";
console.log(st.trim());
// let str4 =prompt("pleaseenterastring");
// console.log(`originalstring=${str4}`);
// console.log(`stringwithoutspaces=${str4.trim()}`);

let str7="ApNaCoLlEgE";
let idx=1;
if(str[idx]==str[idx].toLowerCase())
    {
        console.log("characterislowercase");
    }
    else
    {
        console.log("characterisnotlowercase");

    }
