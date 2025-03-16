//javascript 12
// JSON - javascript object notation - eventually are strings 
let jsonRes = 
    '{"fact":"Cats lap liquid from the underside of their tongue, not from the top.","length":69}'
let json = JSON.parse(jsonRes);  // JSON.parse() - converts a JSON string into a JavaScript object
console.log(json); // returns object 
console.log(json.fact);

let student = 
{
    "name": "sripriya",
    "age": 30,
}
let data = JSON.stringify(student); // JSON.stringify() - converts a JavaScript object into a JSON string
console.log(data)

//Our first API request

// let url = "https://catfact.ninja/fact";

// fetch() - returns a promise that resolves to the Response to that request

// fetch(url) 
// .then((res) => {
//     return res.json() 
// }) 
// .then((data) => {
//     console.log("data1 : ", data.fact);
//     return fetch(url)
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2 : ", data2.fact);
// })
// .catch((err) => {
//     console.log("error : ", err);
//     })
// let a = 5
// console.log(a)

//using fetch with async/await

// async function getCatFact() {
//     try {
//         let res = await fetch(url); // await - waits for the promise to resolve
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//         } catch (err) {
//             console.log("error : ", err);
//             }
//             console.log("bye")
//             }

// java script 13
// using Axios - library to make API requests
let btn = document.querySelector("button");
let url= "https://dog.ceo/api/breeds/image/random";

 btn.addEventListener("click", async() =>{
        let link = await getImage();
        let img = document.querySelector("#result");
        img.setAttribute("src", link);
        console.log(link);
    });
    
    
    async function getImage() {
        try {
            let result = await axios.get(url); // await - waits for the promise to resolve
            return result.data.message;
    
            } catch (err) {
                console.log("error : ", err);
                return "No Image found";
                }
                }

// btn.addEventListener("click", async() =>{
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let result = await axios.get(url); // await - waits for the promise to resolve
//         return result.data.fact;

//         } catch (err) {
//             console.log("error : ", err);
//             return "No fact found";
//             }
//             }

//Axios Sending headers

const url1 = "https://icanhazdadjoke.com/"

async function getJokes() {
    try{
        const config = {headers: {"Accept": "application/json"}};
        let res = await axios.get(url1, config);
        console.log(res.data);
}
catch(err){
    console.log(err);
    }
}
