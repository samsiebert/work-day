var eventBox = $(".event-box")
//get current time(hour) using day.js
let hour = dayjs().hour();

// compare current time with id denoting time in event description box
var testTime = function() {

    var idArr = [];
    $(".event-box").each(function(){
        idArr.push($(this).attr("id"));
    });

    
    

 for (var i = 0; i < idArr.length; i++) {  

    let eventTime = idArr[i];
   if (eventTime < hour) {
        $(".event-box").addClass("past");
   } else if (eventTime > hour) {
        $(".event-box").addClass("future");
   } else {
        $(".event-box").addClass("present");
   };
 };
};

// save event description typed into textarea
var save = function() {
    console.log($("textarea").value);
};

// run function to change colors of time blocks 
testTime();

// when save button is clicked, save function runs
$(".saveBtn").click(function(){
    save();
});

