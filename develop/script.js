/*global moment*/
// Globals
const today = moment().format("dddd, MMMM Do YYYY"), // today's day month date year
  startHour = moment().hour(parseInt($(".hour").first().text())), // start workday
  now = moment(), // current time #am/pm
  endHour = moment().hour(parseInt($(".hour").last().text())); // end workday

// main
// put current day at top of page below jumbotron
$("#currentDay").text(today);

// format textareas compared to current time
$("textarea").map(function () {
  const areaHour = moment().hour(parseInt($(this).attr("name")));
  console.log(areaHour);
  if (areaHour.isBefore(now, "h")) {
    $(this).addClass("past");
  } else if (areaHour.isAfter(now, "h")) {
    $(this).addClass("future");
  } else {
    $(this).addClass("present");
  }
});
