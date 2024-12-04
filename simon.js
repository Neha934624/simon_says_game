let level=0;
let start=false;
let cmpSeq=[]
let usrSeq=[]
let btn=document.querySelectorAll('button')
let h2=document.querySelector("h2")
let color=['red','orange','purple','blue']
document.addEventListener("click",()=>{
    if( start==false){ 
        start=true
        levelUp()
    }
})
function btnflash(btn){
    btn.classList.add('flash')
    setTimeout(()=>{
        btn.classList.remove('flash')
    },1000)
}
function usrflash(btn){
    btn.classList.add('usrflash')
    setTimeout(()=>{
        btn.classList.remove('usrflash')
    },1000)
}
function levelUp(){
    usrSeq=[]
    level++;
    h2.innerText=`Level ${level}`;
    let rand=Math.floor(Math.random()*3)
    console.log(`random index is ${rand}`)
    let randcolor=color[rand]
    console.log(randcolor);
    let randBtn=document.querySelector(`.${randcolor}`)
    cmpSeq.push(randcolor)
    console.log(cmpSeq);
    console.log(randBtn);
    btnflash(randBtn)
}
function check(idx){
    if(usrSeq[idx]===cmpSeq[idx]){
        if(usrSeq.length==cmpSeq.length){
            setTimeout(levelUp,1000)
        }
    }
    else{
        h2.innerHtml=`Game Over!Your Score was <b>${level}</b> <br>Press any key to Start`;
        document.querySelector("body").style.backgroundColor='red';
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor='white';
        },200);
        reset();
    }
}
let butt=document.querySelectorAll(".btn")
function btnpress(){
    let button=this
    console.log("button was pressed");
    usrflash(button)
    console.log(button);
    usrColor=button.getAttribute("id")
    usrSeq.push(usrColor)
    console.log(usrSeq);
    check(usrSeq.length-1)
}
for(let but of butt){
    but.addEventListener("click",btnpress)
}
function reset(){
    usrSeq=[]
    cmpSeq=[]
    start=false
    
    level=0
}