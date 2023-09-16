$(document).ready(function () {

var currentDay = $("#currentDay");
currentDay.text(dayjs().format("dddd, MMMM D"));

var currentHour = dayjs().format("H");
currentHour = parseInt(currentHour);

var timeBlock = $(".time-block");

timeBlock.each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < currentHour) {
        $(this).addClass("past");
    } else if (blockHour == currentHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
});

});