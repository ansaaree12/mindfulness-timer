const start=document.getElementById("startbtn");
const pause=document.getElementById("pausebtn");
const reset=document.getElementById("resetbtn");
const timerText = document.querySelector('.timer-text');
let time=0;
let timer;
let isRunning=false;

function updateDisplay()
{
    const minutes=String(Math.floor(time/60)).padStart(2,'0');
    const seconds=String(time%60).padStart(2,'0');
    timerText.textContent=`${minutes}:${seconds}`;
}


start.addEventListener("click",function(){
    if(!isRunning)
    {
        isRunning=true;
        timer=setInterval(() =>{
            time++;
            updateDisplay();
        },1000)
    }

});

pause.addEventListener("click",function(){

    if(isRunning)
    {

        clearInterval(timer);
        isRunning=false;
    }
});

reset.addEventListener("click",function(){
    clearInterval(timer);
    isRunning=false;
    time=0;
    updateDisplay();

});