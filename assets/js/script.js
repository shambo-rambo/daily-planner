$(document).ready(function () {
    
    // Display the current day
    var currentDay = $("#currentDay");
    currentDay.text(dayjs().format("dddd, MMMM D"));

    // Get the current hour
    var currentHour = parseInt(dayjs().format("H"));

    // Apply past, present, or future classes based on hour
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour == currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
        
        // Load saved descriptions from localStorage
        var savedEvent = localStorage.getItem("description" + blockHour);
        if (savedEvent) {
            $(this).find(".description").val(savedEvent);
        }
    });

    // Save descriptions to localStorage
    $(".saveBtn").click(function() {
        var blockHour = $(this).parent().attr("id").split("-")[1];
        var eventDesc = $(this).siblings(".description").val();
        localStorage.setItem("description" + blockHour, eventDesc);
    });
});
