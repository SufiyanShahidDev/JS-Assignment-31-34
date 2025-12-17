
// Answer1

var now = new Date();

console.log("Current Date & Time: " + now);
alert("Current Date & Time: " + now);

// Answer2

var now = new Date();
var monthIndex = now.getMonth();

var months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var currentMonth = months[monthIndex];

console.log("Current Month: " + currentMonth);
alert("Current Month: " + currentMonth);

// Answer3

var now = new Date();
var dayIndex = now.getDay();

var days = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];

var shortDay = days[dayIndex];

console.log("Today is: " + shortDay);
alert("Today is: " + shortDay);

// Answer4

var now = new Date();
var dayIndex = now.getDay();

if (dayIndex === 0 || dayIndex === 6) {
    alert("It's Fun day");
    console.log("It's Fun day");
} else {
    alert("It's a normal day");
    console.log("It's a normal day");
}
