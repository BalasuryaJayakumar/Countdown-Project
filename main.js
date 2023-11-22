const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const giveaway = document.querySelector(".giveaway_h4");
const countdown = document.querySelector(".countdown");
const timers = document.querySelectorAll(".timer h4");

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

//const futureDate = new Date(2023, 10, 17, 11, 41, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway Ends On ${weekday}, ${date} ${month} ${year} ${hours}: ${mins} am`

const futureTime = futureDate.getTime();

const getRemainingTime = () => {
    const today = new Date().getTime();
    timeLeft = futureTime - today;
    
    const oneDay = 24 * 60 * 60 *1000;
    const oneHour = 60 * 60 *1000;
    const oneMinute = 60 *1000;

    const dayLeft = Math.floor(timeLeft / oneDay);
    const hourLeft = Math.floor((timeLeft % oneDay) / oneHour);
    const minLeft = Math.floor((timeLeft % oneHour) / oneMinute);
    const secLeft = Math.floor((timeLeft % oneMinute) / 1000);

    const values = [dayLeft,hourLeft,minLeft,secLeft];

    const format = (item) => {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    timers.forEach(function (timer, index) {
        timer.innerHTML = format(values[index]);
    })

    if (timeLeft < 0) {
        clearInterval(runTime);
        countdown.innerHTML = `<h4>Sorry, This Giveaway Has Expired.</h4>`
    }

}

let runTime = setInterval(getRemainingTime, 1000);


getRemainingTime();