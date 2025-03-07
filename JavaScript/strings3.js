// part 3 of javascript

// strings are immutable
//string methods - trim method (trims the spaces from the string but doesnt changes the original string)

let str = "   hello world   ";
console.log(str.trim()); //output: "hello world"
console.log(str); //output: "   hello world   "
//toLowercase and toUppercase
let name = "Vikas"
console.log(name.toUpperCase()); //output: "VIKAS"
console.log(name.toLowerCase()); //output: "vikas"

//Methods with Arguments - indexOf
let str1 = "ILoveCoding";
console.log(str1.indexOf("Love")); //output: 2
console.log(str1.indexOf("ove"));  //gives the first occurence of the string
console.log(str1.indexOf("a"));  //if any of the letter is not present in the string it returns -1

//Method chaining

let str2 = "    Hello   ";
console.log(str2.trim().toLowerCase()); 

//slice method
let str3 = "Sripriya";
console.log(str3.slice(0,3));
console.log(str3.slice(3));
console.log(str3.slice(-2)); //subtracts the given number from the end of the string.

//replace and repeat
let str4 = "ILoveCoding";
console.log(str4.replace("Love","do"));
console.log(str4.replace("o", "a"));

console.log(str4.repeat(4));

//Practice Question

let msg = "hello!"
console.log(msg.trim().toUpperCase());

let name1 = "ApnaCollege";
console.log(name1.slice(4,9));
console.log(name1.indexOf("na"));
console.log(name1.replace("Apna", "Our"));
console.log(name1.slice(4).replace("l","t"));