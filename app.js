
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

// Answer5

var now = new Date();
var date = now.getDate();

if (date < 16) {
    alert("First fifteen days of the month");
    console.log("First fifteen days of the month");
} else {
    alert("Last days of the month");
    console.log("Last days of the month");
}

// Answer6

var d = new Date();

var minutesSince1970 = d.getTime() / (1000 * 60);

alert("Minutes since Jan 1, 1970: " + minutesSince1970);
console.log("Minutes since Jan 1, 1970: " + minutesSince1970);

// Answer7

var now = new Date();
var hours = now.getHours();

if (hours < 12) {
  alert("It's AM");
  console.log("It's AM");
} else {
  alert("It's PM");
  console.log("It's PM");
}

// Answer8

var laterDate = new Date(2020, 11, 31);  

console.log(laterDate);
alert(laterDate);
