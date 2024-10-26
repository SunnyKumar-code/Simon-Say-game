let gameSeq = [];
let userSeq = [];
let started = false;
let btns = ["btn1", "btn2", "btn3", "btn3"];
let body= document.querySelector("body");
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if (!started) {
        started = true;
       levelup();
    }
})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}

function userflash(btn){
    btn.classList.add("userClick");
    setTimeout(function(){
        btn.classList.remove("userClick");
    },1000);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level: ${level}`;

    //rendom btn choose
    let randomIndex = Math.floor(Math.random() * btns.length);
    let randColor = btns[randomIndex];
    let randbtn = document.querySelector(`#${randColor}`);
    gameSeq.push(randColor);
    btnflash(randbtn);
}
function checkAns(idx){
   
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelup,500);
        }
    }else{
        h2.innerHTML = ` Game Over!  Your Score is <b>${level}</b> <br>press Any key to Restart Game`;
        body.classList.add("game-over");
        // stop game
        setTimeout(function(){
            body.classList.remove("game-over");
        },500)
        started = false;
        // clear userSeq
        userSeq = [];
        // reset level
        level = 0; 
        gameSeq = []; 
    }
}
 function btnPress() { 
    let btn = this; 
    userflash(btn);
    userBtn = btn.getAttribute("id");
    userSeq.push(userBtn);   
    checkAns(userSeq.length-1); 
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
