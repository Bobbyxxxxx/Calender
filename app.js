const day = document.getElementById("day");
const weekday = document.getElementById("weekday");
const month = document.getElementById("month");
const year = document.getElementById("year");
let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let newDate = new Date();
console.log(newDate);


day.textContent = (newDate.getDate() <= 9) ? "0" + newDate.getDate() : newDate.getDate();
weekday.textContent = weekdays[newDate.getDay()];
month.textContent = months[newDate.getMonth()];
year.textContent = newDate.getFullYear();

