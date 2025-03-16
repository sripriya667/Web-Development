let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let level = 0;

let h3 = document.querySelector("h3");

let started = false;
document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game started");
        started = true;

        levelUp();
}
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
        }, 200);
}


function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
        }, 200);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function btnPress() {
    let userBtn = this;
    userFlash(userBtn);

    userColor = userBtn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}


function checkAns(idx) {
    // console.log("current level:", level)

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h3.innerHTML = `Game over! Your score was <b>${level - 1}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

let allBtns = document.querySelectorAll(".btn");

allBtns.forEach((btns) => {
    btns.addEventListener("click", btnPress);
});
 
function reset() {
    started = false;
    level = 0;
    userSeq = [];
    gameSeq = [];
}

