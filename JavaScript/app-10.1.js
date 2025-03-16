// an activity to generate random rgb colors using javascript

// let btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//     let h3 = this.ownerDocument.querySelector("h3");
//     let color = getRandomColor();
//     h3.textContent = color;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = color;

//     console.log("color updated");
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

//this in Event Listeners

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }


// btn.addEventListener("click", changeColor)
// h1.addEventListener("click", changeColor)
// h3.addEventListener("click", changeColor)
// p.addEventListener("click", changeColor)  //this will change the color of the paragraph when clicked


//keyboard events

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event) {
//     console.log("code = ", event.key); //ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
//     if(event.key === "U") {
//         console.log("character moves up");
//     }
//     if(event.key === "D") {
//         console.log("character moves down");
//     }
//      if(event.key === "L") {
//         console.log("character moves left");
//         }
//          if(event.key === "R") {
//             console.log("character moves right");
//             }
//  });

//  let input = document.querySelector("input");
//  input.addEventListener("keydown",function(event) {
//     console.log(event.code);
//     console.log("key was pressed")
// });

//form Events

// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault(); //stops the form from submitting
//     alert ("form submitted"); 
// });

//extracting form data

// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault(); //stops the form from submitting
   
//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);  //for forms , the value is the text that the user has entered because we cant use innerText or innerHTML
// });

//change event and input event
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault(); //stops the form from submitting
// });
   
//  let inp = document.querySelector("input");
//  inp.addEventListener("input", function() {
//     console.log("input event triggered");
//     console.log("final value" , this.value);
//     });

// Assignment

// let input = document.querySelector("input");
// input.addEventListener("load", function(event) {
//     event.preventDefault;
//     console.log("mouse out event triggered");
// });

// let btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//     console.log("color changed");
//     btn.style.backgroundColor = "green";
//     });  //this is a function that is called when the button is clicked

//event bubbling - nesting of event listeners is known as event bubbling

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

div.addEventListener("click", function() {
    console.log("div was clicked");
});
ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul was clicked");
});
for(lis of li) {
    lis.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log("li was clicked");
});
}