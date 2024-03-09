let gameseq=[];
let userseq=[];

let btns=["red","green","yellow","blue"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is ready")
        started=true;
        Levelup()
    }
})

function Levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randomidx= Math.floor(Math.random()*3);
    let randomcolor=btns[randomidx];
    let randombtn=document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);
    gameflash(randombtn);


}
function btnpress (){
    console.log(this);
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

function checkans(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
          setTimeout(Levelup, 1000);  
        }
    }else{
        h2.innerHTML=`Game Over! Your Score Was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="";
        },100);
        
        reset();
    }
}

let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}


function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },150);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
    

}