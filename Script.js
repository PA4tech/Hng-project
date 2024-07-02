function updateTime() {
    const now = new Date();
    const utcTime =
 now.toUTCString().slice(17,25);
    const dayofWeek =
now.toUTCString().split(',')[0];


document.getElementById('time').innerText = utcTime;

document.getElementById('day').innerText = dayofWeek;
}

setInterval(updateTime,1000);
updateTime();

