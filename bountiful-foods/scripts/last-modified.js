const lastMod = document.lastModified;

document.getElementById('modified').innerHTML = '&copy;2023 Bountiful Foods | Seth Bowles | WDD230 Final Project | ' + 'Last modified ' + lastMod;

// if (window.location.href == "https://mercsman.github.io/wdd230/chamber/index.html" || window.location.href == "https://mercsman.github.io/wdd230/chamber/discover.html")
// {
// if (!localStorage.getItem("last-visit"))
// {
//     localStorage.setItem("last-visit", Date.now());
//     document.getElementById("visits").innerHTML = "Welcome to your first visit!";
// }

// else
// {
//     calculate_difference();
// }
// };

// function calculate_difference()
// {
//     let last_date = localStorage.getItem("last-visit");
//     let current_date = Date.now();


//     let difference = current_date - last_date;
    
// if (!difference == 0) {

//     document.getElementById("visits").innerHTML = difference;
// }
// else {
//     document.getElementById("visits").innerHTML = '0';
//     localStorage.setItem("last-visit", Date.now());
// }
// };