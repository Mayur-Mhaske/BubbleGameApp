function makeBubble() {
    let cluster = "";
    for (let i = 1; i <= 250; i++) {
        let rn = Math.floor(Math.random() * 10);
        cluster += `<div id="buble">${rn}</div>`;
    }
    document.querySelector(".btm-panel").innerHTML = cluster;
}

var Timer = 60;
var hitrn;
let Score=0;
function runtime() {
    let timerInterval = setInterval(function () {
        if (Timer > 0) {
            Timer--;
            document.querySelector("#Timer").textContent = Timer;
        } else {
            clearInterval(timerInterval); // Stop the timer when it reaches 0
           document.querySelector(".btm-panel").innerHTML =`<h1 style="color: red; margin-top:40px; margin-left:400px ">Game Over ! Score : ${Score}</h1>`;
        }
    }, 1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#HitVal").textContent = hitrn;
}

function IncreseScore(){
    Score += 10;
    document.querySelector("#scoreval").textContent=Score;

}

document.querySelector(".btm-panel").addEventListener("click", function(details) {
   var clickednum =  Number(details.target.textContent);
   if(clickednum == hitrn){
    IncreseScore();
    getNewHit();
   }
  });





makeBubble();
runtime();
getNewHit();
