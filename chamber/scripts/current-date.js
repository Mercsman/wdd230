// const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
// document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options); 

// day names array
const dayNames = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];
// Long month names array
const months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];
const todaysDate = new Date();
const dayName = dayNames[todaysDate.getDay()];
const monthName = months[todaysDate.getMonth()];
const year = todaysDate.getFullYear;
const currentDate = dayName + ", " + todaysDate.getDate() + " " + monthName + ", " + todaysDate.getFullYear();





document.getElementById('currentdate').textContent = currentDate; 