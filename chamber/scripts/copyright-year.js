const year = new Date();
let today = year.getDay();
const copyright = year.getFullYear();
document.getElementById('copyright').innerHTML = 'WDD230 Projects &copy; ' + copyright + ' | Seth Bowles | California';
// document.querySelector

// const copyright = document.getElementById('copyright').innerHTML;
// copyright = document.write(new Date().getFullYear()).innerHTML;


let banner = document.getElementByID('banner');

if (today == 1 || today == 2) {
    banner.style.display = "block";
} 
else {
    banner.style.display = "none";
};
