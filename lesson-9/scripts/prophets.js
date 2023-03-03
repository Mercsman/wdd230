const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); //Selects the container
    
prophets.forEach(prophet => {
    // create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birth = document.createElement('p');
    let place = document.createElement('p');
    let age = document.createElement('p');
    
    // This builds the h2 content out to show the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    
    //Build out paragraph text content
    birth.textContent = `Date of birth: ${prophet.birthdate}`;
    place.textContent = `Place of birth: ${prophet.birthplace}`;
    
    
    let order = prophet.order;
    let sup = "th";
    // checking order of prophet
    if (order === 1) {
        sup = "st";
    }
    if (order === 2) {
        sup = "nd";
    }
    if (order === 3) {
        sup = "rd";
    }
    
    //Age calc
    if (prophet.death === null) {
        prophet.death = (new Date());
    }
    let death = (new Date(prophet.death));
    let deathAge = death - (new Date(prophet.birthdate));
    let length = Math.floor((deathAge/365/24/60/60/1000));
    
    age.textContent = `Age: ${length}`
    //Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt',`${prophet.name} ${prophet.lastname} - ${order}<sup>${sup}</sup> Latter-Day President`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
    
    //Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(birth);
    card.appendChild(place);
    card.appendChild(age);
    card.appendChild(portrait);

    
    cards.appendChild(card);
} //End of for each loop
); 

} //end of function expression

