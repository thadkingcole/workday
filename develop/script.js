/*global moment*/

const today = moment().format("dddd, MMMM Do YYYY"); // today's day month date year
$("#currentDay").text(today); // display current day in jumbotron

/*
  for each textarea, apply format based on current time
  & load events from local storage
*/
$("textarea").map(function () {
  const areaHour = moment().hour(parseInt($(this).attr("name"), 10)), // moment.js object for respective textarea
    event = localStorage.getItem(areaHour.hour()), // saved event
    now = moment(); // current time #am/pm

  // format textarea based on local time
  if (areaHour.isBefore(now, "h")) {
    $(this).addClass("past");
  } else if (areaHour.isAfter(now, "h")) {
    $(this).addClass("future");
  } else {
    $(this).addClass("present");
  }

  // display saved event from local storage if there is one for that hour
  if (event) {
    $(this).val(event);
  }
});

// event listener for all save buttons
$(".saveBtn").click(function () {
  const event = $(this).prev().val(), // text in textarea being saved
    time = $(this).prev().attr("name"); // respective textarea hour
  // save event for hour
  localStorage.setItem(time, event);
});
