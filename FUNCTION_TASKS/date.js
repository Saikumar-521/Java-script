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