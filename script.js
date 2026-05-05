let seconds = 0; 
let interval = null; 
function updateDisplay() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    // format to 2 digits
    hrs = hrs.toString().padStart(2, '0');
    mins = mins.toString().padStart(2, '0');
    secs = secs.toString().padStart(2, '0');

    document.getElementById("display").innerText = `${hrs}:${mins}:${secs}`;
}

// start stopwatch
function start() {
    if (interval) return; 

    interval = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
}

// pause stopwatch
function pause() {
    clearInterval(interval);
    interval = null;
}

// reset stopwatch
function reset() {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    updateDisplay();

    // clear laps
    document.getElementById("laps").innerHTML = "";
}

// record lap
function lap() {
    if (seconds === 0) return; 

    const li = document.createElement("li");
    li.innerText = document.getElementById("display").innerText;
    document.getElementById("laps").appendChild(li);
}