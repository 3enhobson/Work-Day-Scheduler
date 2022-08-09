//Today's Date
var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDate").text(currentDate);

$(document).ready(function() {

    function checkHour() {
        var currentHour = moment().hour();

        $(".time-block").each(function () {

            var hour = parseInt($(this).attr("id"));

            if (hour < currentHour) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            } else if (hour === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })


    checkHour();
    setInterval(checkHour, 60000);

})







