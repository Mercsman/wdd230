let date = Date.now();

if (!localStorage.getItem("last-visit"))
{
    localStorage.setItem("last-visit", date);
    document.getElementById("visits").innerHTML = "Welcome to your first visit!";
}

else
{
    let last_date = localStorage.getItem("last-visit");
    // let current_date = Date.now();


    let difference = ((date - last_date) / 86400000).toFixed(0);

    document.getElementById("visits").innerHTML = `It has been ${difference} days since you last visit`;

    localStorage.setItem("last-visit", date);
    // calculate_difference();
};

function calculate_difference()
{
    let last_date = localStorage.getItem("last-visit");
    // let current_date = Date.now();


    let difference = date - last_date;

    document.getElementById("visits").innerHTML = difference;

    localStorage.setItem("last-visit", date);
};