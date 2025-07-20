const display = document.getElementById('display');
let timer = null; // holds the ID of setInterval to keep track of it
let startTime = 0;
let elapsedTime = 0;
let isRunning = false; //for when the stopwatch isn't running, otherwise flip to true

function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function reset(){
    
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false; //for when the stopwatch isn't running, otherwise flip to true
    display.textContent = '00:00:00:00';
}

function stop(){

    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}


function update(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, 0); // divided by 60 so that any spill over minutes are reset to 0
    let seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, 0);
    let milliSeconds = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2, 0); // returns just the 1st 2-digits

    display.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
}
