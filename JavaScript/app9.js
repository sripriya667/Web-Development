//getElementByclasssname

// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i<smallImages.length; i++) {
//     smallImages[i].src = "spiderman_img.png" ;
//     console.log(`value of image no ${i} is changed.`);
// }

console.dir(document.querySelector("p"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelectorAll("p"));

//setting content in objects

// inner text - shows the web page data as it is
// inner html - shows all the mark up data like including tags 
// text content - shows hidden data means shows the acttal content 

//style property in dom is used to change the style of the element dynamically only when it is mentioned in inline style 
   // the style that made in css is not changed by this property

let links = document.querySelectorAll('.box a');


for(link of links) {
    link.style.color = "red";
}
// for(let i = 0; i<links.length; i++) {
//     links[i].style.color = "green";
// }

let para1 = document.createElement("p");
para1.innerText= "Hey I'm red!"
document.querySelector('body').prepend(para1);

para1.classList.add("red")

let h3 = document.createElement("h3");
h3.innerText= "I'm a blue H3!"
document.querySelector('body').prepend(h3);

h3.classList.add("blue")

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("para2");

h1.innerText = "I'm in a div"
para2.innerText = "ME TOO"

div.append(h1);
div.append(para2);

div.classList.add('box')
document.querySelector('body').prepend(div);

//assignment

let btn = document.createElement("button");
btn.innerText = "Click me";
document.querySelector('body').prepend(btn);
btn.classList.add("btn")

let DOM = document.createElement("h1");
DOM.innerText = "DOM Practice";
document.querySelector('body').prepend(DOM);
DOM.classList.add("DOM");

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Sigma</b> Practice";
document.querySelector('body').prepend(p);

