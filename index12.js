function updateClock(){
    const now = new Date();

    //-----to 12-hour clock system---------------

    let hours = now.getHours();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0)
    
    //-----to 12-hour clock system---------------

    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000); //makes the clock update repeated number of times depending on the set interval