const symbols = ["🍒","🍋","🔔","⭐","7️⃣"];

function randomSymbol(){
return symbols[Math.floor(Math.random()*symbols.length)];
}

function spin(){

let reel1 = document.getElementById("reel1");
let reel2 = document.getElementById("reel2");
let reel3 = document.getElementById("reel3");

reel1.classList.add("spin");
reel2.classList.add("spin");
reel3.classList.add("spin");

document.getElementById("result").textContent = "";

/* stop reels one by one */

setTimeout(()=>{
reel1.classList.remove("spin");
reel1.textContent = randomSymbol();
},1000);

setTimeout(()=>{
reel2.classList.remove("spin");
reel2.textContent = randomSymbol();
},1500);

setTimeout(()=>{
reel3.classList.remove("spin");
reel3.textContent = randomSymbol();

checkWin();
},2000);

}

function checkWin(){

let r1 = document.getElementById("reel1").textContent;
let r2 = document.getElementById("reel2").textContent;
let r3 = document.getElementById("reel3").textContent;

let result = document.getElementById("result");

if(r1===r2 && r2===r3){
result.textContent="🎉 JACKPOT!";
}
else if(r1===r2 || r2===r3 || r1===r3){
result.textContent="✨ Small Win!";
}
else{
result.textContent="Try Again!";
}

}