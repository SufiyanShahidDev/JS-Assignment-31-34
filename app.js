
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
