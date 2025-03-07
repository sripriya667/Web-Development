// an activity to generate random rgb colors using javascript

let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let h3 = this.ownerDocument.querySelector("h3");
    let color = getRandomColor();
    h3.textContent = color;

    let div = document.querySelector("div");
    div.style.backgroundColor = color;

    console.log("color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}