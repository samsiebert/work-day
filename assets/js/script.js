var eventBox = $(".event-box")
//get current time(hour) using day.js
let hour = dayjs().hour();
var events = [];
var idArr = [];
$(".event-box").each(function(){
    idArr.push($(this).attr("id"));
});

// compare current time with id denoting time in event description box
var testTime = function() {
    

let eventTime = $(".event-box").attr("id")
   if (eventTime < hour) {
      $(this).addClass("past");
       console.log("before");
   } else if (eventTime > hour) {
    $(this).addClass("future");
        console.log("after");
   } else {
    console.log("during");
    $(this).addClass("present");
   };
};



var load = function() {
    events = JSON.parse(localStorage.getItem("events"));
    $("textarea").val(events);
};
 

// save event description typed into textarea
var save = function() {
    var eventData = $(this).closest.sibling.val();
console.log(eventDate);
    localStorage.setItem($)
    events = [];
    $("textarea").each(function(){
        events.push($(this).val());
    });
    localStorage.setItem("events", JSON.stringify(events));
};

// run function to change colors of time blocks 
testTime();

// when save button is clicked, save function runs
$(".saveBtn").click(function(){
    save();
});

load();