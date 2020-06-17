// put current day at top of page below jumbotron
const today = moment().format("dddd, MMMM Do YYYY"); // string day month date year
$("#currentDay").text(today);