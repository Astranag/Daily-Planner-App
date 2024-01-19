// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})

// This code is a JavaScript function called timeTracker() that is used to add CSS classes to elements with the class "time-block" based on the current time. It uses the Moment.js library to get the current hour and then loops through each element with the class "time-block" to determine whether its associated hour has passed, is current, or is in the future.

// The function first gets the current number of hours using moment().hour() and then loops through each time block using the jQuery .each() function. For each time block, it extracts the associated hour by splitting the ID attribute of the element and converting the second part to an integer.

// The function then checks whether the block time is less than, equal to, or greater than the current time. If the block time is less than the current time, it removes the "future" and "present" classes and adds the "past" class. If the block time is equal to the current time, it removes the "past" and "future" classes and adds the "present" class. If the block time is greater than the current time, it removes the "present" and "past" classes and adds the "future" class.

// After the time tracking function is defined, the code retrieves items from local storage for each time block and sets the value of the corresponding textarea element. Finally, the timeTracker() function is called to apply the appropriate CSS classes to each time block based on the current time.

// Overall, this code is used to create a time tracking application that highlights the current time block and indicates whether time blocks have passed or are in the future.