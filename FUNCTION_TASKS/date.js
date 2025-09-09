let time = document.getElementById("increasingTime");
let timeDesc = document.getElementById("decreasingTime");
function increasingTime() {

    let date = new Date();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let seconds = date.getSeconds();
    //console.log(`Time : ${hours}:${minutes}:${seconds}`);
    seconds++;
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes >= 60) {
        hours++;
        minutes = 0;
    }
    time.innerHTML = `<button class="font-bold text-3xl bg-sky-200 border-1 p-2 rounded">Time : ${hours}:${minutes}:${seconds} </buttton> `;

}
setInterval(increasingTime, 1000);

function decreasingTime() {

    let date = new Date();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let seconds = date.getSeconds();

    seconds--;
    if (seconds <= 0) {
        minutes--;
        seconds = 59;
    }
    if (minutes < 0) {
        hours--;
        minutes = 59;
    }
    timeDesc.innerHTML = `<button class="font-bold text-3xl bg-sky-200 border-1 p-2 rounded">Time : ${hours}:${minutes}:${seconds} </button> `;
}
setInterval(decreasingTime, 1000);
decreasingTime();

// Set the target date & time (Change as per your need)
let targetDate = new Date("2025-09-8 14:00:00");

function countdownTimer() {
    let now = new Date();
    let diff = targetDate - now;

    // If time is up
    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "🎉 Time's up!";
        clearInterval(timer);
        return;
    }

    // Convert difference into days, hours, minutes, seconds
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML =
        `${days} days ${hours} hrs ${minutes} mins ${seconds} secs to go`;
}

// Call function every second
let timer = setInterval(countdownTimer, 1000);
