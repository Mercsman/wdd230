let date = Date.now();

if (!localStorage.getItem("last-visit"))
{
    localStorage.setItem("last-visit", date);
    document.getElementById("visits").innerHTML = "Welcome to your first visit!";
}

else
{
    let lastDate = localStorage.getItem("last-visit");
    // let current_date = Date.now();


    let difference = ((date - lastDate) / 86400000).toFixed(0);

    document.getElementById("visits").innerHTML = `It has been ${difference} days since you last visit`;

    localStorage.setItem("last-visit", date);
    // calculate_difference();
};

function calculate_difference()
{
    let lastDate = localStorage.getItem("last-visit");
    // let current_date = Date.now();


    let difference = date - lastDate;

    document.getElementById("visits").innerHTML = difference;

    localStorage.setItem("last-visit", date);
};