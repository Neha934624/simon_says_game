let usrseq=[]
let cmpseq=[]
let level=0
let start=false;
let h2=document.querySelector("h2")
let btn=document.querySelectorAll("button")
document.addEventListener("click",()=>{
    
    if(start==false){
        h2.innerText='Press any key to start the game!'
        start=true
        levelUp()
    }
})
function cmpflash(but){
    but.classList.add('flash')
    setTimeout(()=>{
        but.classList.remove('flash')
    },1000)

}
function usrflash(btn){
    btn.classList.add('usrflash')
    setTimeout(()=>{
        btn.classList.remove('usrflash')
    },1000)
}
let color=['red','orange','purple','blue']
function levelUp(){
    usrseq=[]
    level++;
    h2.innerText=`Level ${level}`
    let ranndInt=Math.floor(Math.random()*4);
    console.log(ranndInt);
    let randCol=color[ranndInt]
    console.log(randCol);
    // cmpflash(randCol)
    let btn=document.querySelector(`.${randCol}`)
    console.log(btn);
    cmpflash(btn)
    cmpseq.push(randCol)
}
for(let b of btn){
    b.addEventListener("click",usrclick)
}
function usrclick(){
    let butt=this
    console.log(butt)
    usrflash(butt)
    usrColor=butt.getAttribute('id')
    console.log(usrColor);
    usrseq.push(usrColor)
    check(usrseq.length-1)

}
function check(idx){
    if(usrseq[idx]===cmpseq[idx]){
        if(usrseq.length==cmpseq.length){
            setTimeout(levelUp,1000)
        }
    }
    else{
        h2.innerText="Game Over! Click to start again"
        
        document.querySelector("body").style.backgroundColor='red';
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor='white';
        },100);
        setTimeout(()=>{
            reset();

        },1000)
        
        
    }
}
function reset(){
    enableBut()
    
    
}
function enableBut(){
    level=0
    usrseq=[]
    cmpseq=[]
    start=false

}