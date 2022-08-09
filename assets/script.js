//Today's Date
var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDate").text(currentDate);

function checkHour(){
    var currentHour = moment().hour();

   $(".time-block").each(function(){
     
    var hour = parseInt($(this).attr("id"));

    if(hour < currentHour){
        $(this).addClass("past");
    } else if(hour === currentHour){
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }



   })  
}
checkHour();







