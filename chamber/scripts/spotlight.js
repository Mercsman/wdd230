const url = '/wdd230/chamber/data.json';

async function getBusinessData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displaySpotlight(data.businesses);
}

getBusinessData(url);

const displaySpotlight = (businesses) => {
    const cards = document.querySelector('article'); // select the container element

    let count = 0;
    let spotlights = []; 
    
// --------------------------------------
// Code for random spotlight selection that might work
// const keys = Object.keys(businesses);
// const randIndex = Math.floor(Math.random() * keys.length);
// const randKey = keys[randIndex];
// const spotlight = businesses[randKey];

// if (spotlight.membership === 'Gold' || spotlight.membership === 'Silver') {
//     businesses.append(spotlight);
// };

    while (count < 3) {
        let randIndex = Math.floor(Math.random() * 9)
        let tier = `${businesses[randIndex].tier}`;
        let isFound = spotlights.includes(randIndex);
        
        
        

        if ((tier <= 2)  && (isFound == false)) { 
            count += 1
            spotlights.push(randIndex);
            spotlightBusiness(randIndex);
        }

        function spotlightBusiness(business) {
                let card = document.createElement('section');
            
                // Create elements for the card
                let h2 = document.createElement('h2');
                let logo = document.createElement('img');
                let line = document.createElement('hr');
                let address = document.createElement('p');
                let phone = document.createElement('p');
                let web = document.createElement('a');

                // Build out paragraph text content
                h2.innerHTML = `${businesses[business].name}`;
                logo.innerHTML = `${businesses[business].img}`;
                address.innerHTML = `${businesses[business].address}`;
                phone.innerHTML = `${businesses[business].phone}`;
                web.innerHTML = `${businesses[business].url}`;

                // Build the image portrait by setting all the relevant attributes
                logo.setAttribute('src', businesses[business].img);
                logo.setAttribute('alt', 'spotlight business')
                logo.setAttribute('width', '300');
                logo.setAttribute('height', '200');


                web.setAttribute('href', businesses[business].url);

                // Add the new elements to the card
                card.appendChild(h2);
                card.appendChild(logo);
                card.appendChild(line);
                card.appendChild(address);
                card.appendChild(phone);
                card.appendChild(web);

                //Add the card to the cards container
                cards.appendChild(card);
        }   
    }  
} // end of function expression













// const url = '/wdd230/chamber/data.json';

// async function getBusinessData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     // console.table(data.prophets);
//     displayBusinesses(data.businesses);
//     // console.log(data)
// }

// getBusinessData(url);



// // --------------------------------------
//         // Code for random spotlight selection that might work

//         // const keys = Object.keys(businesses);

//         // const randIndex = Math.floor(Math.random() * keys.length);
    
//         // const randKey = keys[randIndex];
    
//         // const spotlight = businesses[randKey];
        
//         // if (spotlight.membership === 'Gold' || spotlight.membership === 'Silver') {
//         //     business.append(spotlight);
//         // };


// // place.className = 'class';

// const displayBusinesses = (businesses) => {
//     const cards = document.querySelector('article'); //Selects the container
    
//     let count = 0;
//     let spotlights = [];
    
//     while (count < 3) {
//         let randIndex = Math.floor(Math.random() * 9)
//         let tier = `${businesses[randIndex].tier}`;
//         let displayed = spotlights.includes(randIndex);
        
//         if ((tier >= 2) && (displayed == false)) {
//         count += 1
//         spotlights.push(randIndex);
//         // spotlight(randIndex);
//         }
//         // if ((tier >= 3) && (displayed == false)) {
//         //     count += 1
//         //     spotlights.push(randIndex);
//         //     spotlight(randIndex);
//         //     }
    
    
    
//         spotlights.foreach(business => {
//         // create elements to add to the div.cards element
//         let card = document.createElement('section');
        
        
//         let h2 = document.createElement('h2');
//         let logo = document.createElement('img');
//         let line = document.createElement('hr');
//         let address = document.createElement('p');
//         let phone = document.createElement('p');
//         let web = document.createElement('a');
//         // let member = document.createElement('p');
        
//         // This builds the h2 content out to show the business's full name
//         h2.textContent = `${business.name}`;
        
//         //Build out paragraph text content
//         address.textContent = `Address: ${business.address}`;
//         phone.textContent = `Phone number: ${business.phone}`;
//         web.textContent = `Website: ${business.url}`;
//         // member.textContent = `Member level: ${business.membership}`;
        
//         card.className = 'direct-card';
//         h2.className = 'direct-title02';
//         address.className = 'card-p direct-address';
//         phone.className = 'card-p direct-phone';
//         web.className = 'card-p direct-web';
//         // member.className = 'card-p direct-member';
//         logo.className = 'direct-logo';
    
//         //Build the image portrait by setting all the relevant attributes
//         logo.setAttribute('src', business.img);
//         logo.setAttribute('alt',`${business.name} - logo`);
//         logo.setAttribute('loading', 'lazy');
//         logo.setAttribute('width', '100');
//         logo.setAttribute('height', '100');
//         web.setAttribute('href', business.url);
        
//         //Append the section(card) with the created elements
//         card.appendChild(logo);
//         card.appendChild(h2);
//         card.appendChild(line);
//         card.appendChild(address);
//         card.appendChild(phone);
//         card.appendChild(web);
        
    
        
//         cards.appendChild(card);
//         }
//         );
//     }

// } //end of function expression

