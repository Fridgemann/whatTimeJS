const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc)
dayjs.extend(timezone)

document.getElementById('timezone').textContent = dayjs.tz.guess();


function updateClock() {
    const now = dayjs().format('HH:mm:ss'); // get current time
    document.getElementById('clock').textContent = now; // update DOM

    let d = new Date();
    let day = dayjs(d).format('dddd, D MMMM, YYYY');
    document.getElementById('date').textContent = day;
}

updateClock(); // initial call
setInterval(updateClock, 1000); // update every second

