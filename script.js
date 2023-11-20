//This is the current Timestamp
var currentDay = $("#currentDay");
currentDay.text(moment().format('dddd, MMMM Do YYYY'));
var currentHour = moment().hour();

// Apply CSS Classes
$(".time-block").each(function () {
  var theHourColumn = $(this).attr("id").split("-")[1];
  var savedText = localStorage.getItem(theHourColumn);
  var textArea = $(this).find(".description");
  textArea.val(savedText);
  if (theHourColumn < currentHour) {
    $(this).find(".description").addClass("past");
  } else if (theHourColumn == currentHour) {
    $(this).find(".description").addClass("present");
  } else {
    $(this).find(".description").addClass("future");
  }
});

//Save text to localStorage
$(".saveBtn").on("click", function () {
  var key = $(this).parent().attr("id").split("-")[1];
  var value = $(this).parent().find(".description").val();
  localStorage.setItem(key, value);
});