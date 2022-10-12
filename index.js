const minInp = document.querySelector("#fstInp");
const secInp = document.querySelector("#sndInp");
const minNum = document.querySelector("#minute")
const secNum = document.querySelector("#second")
const count = document.querySelector("#start")

const startingMinutes = 10;
let time = startingMinutes * 60;

const countDownEl = document.getElementById('countdown');

setInterval(updateCountDown, 1000);

function updateCountDown () {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minNum.innerHTML = `${minutes}`;
    secNum.innerHTML = `${seconds}`;
    time--;
}



function sendData() {
    minNum.innerHTML = minInp.value;
}



// minInp.addEventListener('keyup', sendData);
// count.addEventListener('onclick', startCount);
