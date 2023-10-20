"use strict";

// Elements
const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
// End of Elements

// Days of the week and months arrays
// prettier-ignore
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday",];
// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Functions
// format date
const formatDate = (date) => (date < 10 ? `0${date}` : date);

// display date
const displayDate = () => {
  // get current date
  const dateNow = new Date();

  // get date, day, month, year
  const currDate = formatDate(dateNow.getDate());
  const currDay = weekDays[dateNow.getDay()];
  const currMonth = months[dateNow.getMonth()];
  const currYear = dateNow.getFullYear();

  // display on calendar
  date.innerHTML = currDate;
  day.innerHTML = currDay;
  month.innerHTML = currMonth;
  year.innerHTML = currYear;
};
// End of Functions
displayDate();
