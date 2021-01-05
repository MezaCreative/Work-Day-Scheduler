$(document).ready(function() {
   // Sets current date 
   $("#currentDay").text(moment().format('dddd') + ", " + moment().format("MMM Do YYYY"));
    //moment().format('h:mm:ss a');
    var currentHour = moment().hour();
   // on click saves text and time
    $(".saveBtn").on("click", function(){
        savedText =$(this).siblings(".info").val();
        savedTime =$(this).parent().attr("id");
        console.log(savedText);
        console.log(savedTime);
        localStorage.setItem(savedTime, savedText);
    })

})
// compares the time blocks with current time
function hourColors(){
   $(".time-block").each(function()
   {
      var otherHours = parseInt($(this).attr("id").split("-")[1]);
      var currentHour = moment().hour();
      console.log(otherHours);
         if (otherHours < currentHour) {
            $(this).addClass("grey");
         } else if (otherHours > currentHour) {
            $(this).addClass("green");
         } else $(this).addClass("red");
   })
}
//runs color coder
hourColors();
// loads saved data from local storage
function loadText() {
   $(".time-Block").each(function() {
      var recoverText = localStorage.getItem($(this).siblings.attr("info"));
      $(this).val(recoverText); 
   })
}
loadText();

