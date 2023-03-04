const url = '/wdd230/chamber/data.json';

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayBusinesses(data.businesses);
    // console.log(data)
}

getBusinessData();

// place.className = 'class';

const displayBusinesses = (businesses) => {
    const cards = document.querySelector('div.cards'); //Selects the container
    
businesses.forEach(business => {
    // create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let web = document.createElement('p');
    let member = document.createElement('p');
    
    // This builds the h2 content out to show the business's full name
    h2.textContent = `${business.name}`;
    
    //Build out paragraph text content
    address.textContent = `Address: ${business.address}`;
    phone.textContent = `Phone number: ${business.phone}`;
    web.textContent = `Website: ${business.url}`;
    member.textContent = `Member level: ${business.membership}`;
    
    card.className = 'direct-card';
    h2.className = 'direct-title02'
    address.className = 'card-p direct-address';
    phone.className = 'card-p direct-phone';
    web.className = 'card-p direct-web';
    member.className = 'card-p direct-member';
    logo.className = 'direct-logo';

    //Build the image portrait by setting all the relevant attributes
    logo.setAttribute('src', business.img);
    logo.setAttribute('alt',`${business.name} - ${member} Member`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '340');
    logo.setAttribute('height', '440');
    
    //Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(web);
    card.appendChild(member);
    card.appendChild(logo);

    
    cards.appendChild(card);
} //End of for each loop
); 

} //end of function expression

