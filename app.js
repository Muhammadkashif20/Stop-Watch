// Stop Watch Project:-

var hour=0
var min=0
var sec=0
var milisec=0
var play;
function Start(){

     play=setInterval(() => {
        milisec++
    if(milisec>100){
        sec++
        milisec=0
    }
    if(sec>60){
        min++
        sec=0
    }
    if(min>60){
        hour++
        min=0
    }
    document.getElementById('Stop-Watch').innerText=`${hour} : ${min} : ${sec} : ${milisec}`
}, 10);
}

function pause() {
    clearInterval(play)   
    document.getElementById('Stop')

}
function Reset() {
    location.reload()
}

