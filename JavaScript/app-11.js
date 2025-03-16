
// //call stack
// function one() {
//     return 1;
// }
// function two() {
//     return one() + one();
// }
// function three() {
//     let ans = one() + two();
//     console.log(ans);
// }
// three();

// //js is single threaded but works asynchronously 
// setTimeout (function() {
//     console.log("apnacollege");
//     }, 2000);
//     console.log("hello");  

//promises in js is an object
function savetoDb(data) {
    return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) +1;
    if(internetSpeed > 4){
        resolve("success: data saved to db");
    }
    else {
        reject("failure: weak connection");
    }
    });
}

//then is used to handle the resolved value and catch is used to handle the rejected value
// savetoDb("apnacollege")
// .then(() => {
//     console.log("promise was resolved");
// })
//  .catch(() => {
//     console.log("promise was rejected");
//     });  //then and catch are used to handle the promise

//promise chaining
// savetoDb("apnacollege")
// .then((result) => {
//     console.log("data1 saved ");
//     console.log("result of promise : ",result);
//     return savetoDb("helloWorld");
// })
// .then((result) => {
//     console.log("data2 saved ");
//     console.log("result of promise : ",result);
//     return savetoDb("sripriya");
//     })
//     .then((result) => {
//         console.log("data3 saved ");
//         console.log("result of promise : ",result);
//     })
//  .catch((error) => {
//     console.log("promise was rejected");
//     console.log("error of promise : ",error);
//     }); 

h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num > 5) {
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed");
}, delay);
});
}

// changeColor("red", 1000) 
// .then(() => {
//     console.log("red color is changed");
//     return changeColor("blue", 1000);
//     })
//     .then(() => {
//         console.log("blue color is changed");
//         return changeColor("green", 1000);
//         })
//         .then(() => {
//             console.log("green color is changed");
//             return changeColor("yellow", 1000);
//             })
//             .then(() => {
//                 console.log("yellow color is changed");
//             })

async function color () { 
  
    try{  //Handling rejections with await
        await changeColor("red",1000);
        await changeColor("yellow",1000);
        await changeColor("blue",1000);
        await changeColor("green",1000);
    }
    catch(error){
        console.log("error : ",error);
        }
    let a = 5;
    console.log(a);
    console.log("new number =", a + 3);
}

//async functions
async function greet() {
    // throw "404 page not found"; // throw an error
    return "hello"; //returns a promise
}
greet() 
.then((result) => {
    console.log("promised was resolved ");
    console.log("result was: ", result);
})
.catch((error) => {
    console.log("promise was rejected with error : ", error);
    })


let demo = async () => { //async function using arrow function
    return 5; 
    }

//await function
function getNum() {
    return new Promise((resolve, reject) => {
       setTimeout(() =>{
        let num = Math.floor(Math.random() * 10) +1;
        console.log(num);
        resolve();
       },1000)
        });
}
 let demo2 = async () => {
    await getNum(); //await function
    await getNum();
    getNum();
 }

