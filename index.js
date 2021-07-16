var day = document.getElementById("days");
var hour = document.getElementById("hours");
var minute = document.getElementById("minutes");
var second = document.getElementById("seconds");

//set the date for counting down to
var countDownDate = new Date("Jul 18, 2021 12:00:00").getTime();

var interval = setInterval(function() {
// Get Todays's date and time
var now = new Date().getTime();

//Find the distance between now and countDownDate

var distance  = countDownDate - now;

//Time calculations for days, hours, minutes and seconds

var days =  Math.floor(distance / (1000*60*60*24))
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// output the result in an element with id 

day.innerHTML = days + " D ";
hour.innerHTML = hours + " h ";
minute.innerHTML = minutes + " m ";
second.innerHTML = seconds + " s ";

//If the countdown is over, show the text
if (distance < 0) {
    clearInterval(interval);
    day.innerHTML = "The";
    hour.innerHTML = "Offer";
    minute.innerHTML = "is";
    second.innerHTML = "Valid";
}

})