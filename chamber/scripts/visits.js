if (window.location.href == "https://mercsman.github.io/wdd230/chamber/index.html" || window.location.href == "https://mercsman.github.io/wdd230/chamber/discover.html")
{
if (!localStorage.getItem("last-visit"))
{
    localStorage.setItem("last-visit", Date.now());
    document.getElementById("visits").innerHTML = "Welcome to your first visit!";
}

else
{
    calculate_difference();
}
};

function calculate_difference()
{
    let last_date = localStorage.getItem("last-visit");
    let current_date = Date.now();


    let difference = current_date - last_date;

    document.getElementById("visits").innerHTML = difference;

    localStorage.setItem("last-visit", Date.now());
};