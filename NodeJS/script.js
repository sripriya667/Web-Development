// let n = 5
//  for(let i=1; i<=5; i++) {
//     console.log("hello", i);
//  }

//process is an object in nodejs that provides information and control about current Node.js process
//process.argv - returns an array containing command line arguments passed when node.js process was launched

// let args = process.argv;
// for(let i=2; i<args.length; i++){
//     console.log("hello to ", args[i] );
// }

// const solve = require("./math"); // importing math.js file using require function
// console.log(solve.sum(2,4)); 
// console.log(solve.multiply(2,4)); 

// const info = require("./fruits.js");
// console.log(info[0].color);

import { sum, multiply } from "./math.js";
console.log(sum(2,4));
console.log(multiply(2,4));  // importing sum and multiply functions from math.js file using import function

