const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const second = document.getElementById("second");
const amPm = document.getElementById("amPm");

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let amPm = "AM";

    if (h > 12) {
        h = h - 12;
        amPm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    hour.innerText = h;
    minutes.innerText = m;
    second.innerText = s;
    amPm.innerText = amPm;

    setInterval(() => {
        updateClock();
    }, 1000);
}

updateClock();