import {flights} from "./dataset.js";
const slider = document.getElementById('slider');
const displayPrice = document.getElementById('displayPrice');
const flightOptions = document.getElementById('flight-options');
const numOfResults = document.getElementById('numOfResults');
const sortPrices = document.getElementById('priceRank');
function updateCardsForPriceLimit() {
    flightOptions.innerHTML = "";
    let count = 0;
    for(let i = 0; i < flights.length; i++) {
        if(flights[i].price <= parseInt(slider.value)) {
            count++;
            var newLoc = document.createElement('div');
            newLoc.className = 'flight-option';
            var locationName = document.createElement('p');
            locationName.innerHTML = flights[i].to;
            var price = document.createElement('h4');
            price.innerHTML = "$" + flights[i].price;
            var buttonForBook = document.createElement('button');
            buttonForBook.className = "book-button";
            buttonForBook.innerHTML = "Book Now";
            var image = document.createElement('img');
            image.className = "photo";
            image.src = "location-images/" + flights[i].picture;

            newLoc.appendChild(locationName);
            newLoc.appendChild(image);
            newLoc.appendChild(price);
            newLoc.appendChild(buttonForBook);
    
            flightOptions.appendChild(newLoc);
        }
        
    }
    numOfResults.innerHTML = "Number of results: " + count;

    
}




function initializeNumOfResults() {
    numOfResults.innerHTML = "Number of results: " + parseInt(flights.length);
}
function displayLocationCards() {
    
    initializeNumOfResults();
    for(let i = 0; i < flights.length; i++) {
    
        var newLoc = document.createElement('div');
        newLoc.className = 'flight-option';
        var locationName = document.createElement('p');
        locationName.innerHTML = flights[i].to;
        var price = document.createElement('h4');
        price.innerHTML = "$" + flights[i].price;
        var buttonForBook = document.createElement('button');
        buttonForBook.className = "book-button";
        buttonForBook.innerHTML = "Book Now";
        var image = document.createElement('img');
        image.className = "photo";
        image.src = "location-images/" + flights[i].picture;
        
        newLoc.appendChild(locationName);
        newLoc.appendChild(image);
        newLoc.appendChild(price);
        newLoc.appendChild(buttonForBook);

        flightOptions.appendChild(newLoc);
    }
}

function sortByPrice() {

    if(sortPrices.value == "highToLow") {
        
        const sortedFlightsHighToLow = [...flights];
        sortedFlightsHighToLow.sort((a, b) => {
            return b.price - a.price;
        });
        flightOptions.innerHTML = "";
        let count = 0;
        for(let i = 0; i < sortedFlightsHighToLow.length; i++) {
            if(sortedFlightsHighToLow[i].price <= parseInt(slider.value)) {
                count++;
                var newLoc = document.createElement('div');
                newLoc.className = 'flight-option';
                var locationName = document.createElement('p');
                locationName.innerHTML = sortedFlightsHighToLow[i].to;
                var price = document.createElement('h4');
                price.innerHTML = "$" + sortedFlightsHighToLow[i].price;
                var buttonForBook = document.createElement('button');
                buttonForBook.className = "book-button";
                buttonForBook.innerHTML = "Book Now";
                var image = document.createElement('img');
                image.className = "photo";
                image.src = "location-images/" + sortedFlightsHighToLow[i].picture;

                newLoc.appendChild(locationName);
                newLoc.appendChild(image);
                newLoc.appendChild(price);
                newLoc.appendChild(buttonForBook);
        
                flightOptions.appendChild(newLoc);
            }
            
        }
        numOfResults.innerHTML = "Number of results: " + count;

    } else if(sortPrices.value == "lowToHigh") {
        const sortedFlightsLowToHigh = [...flights];
        sortedFlightsLowToHigh.sort((a, b) => {
            return a.price - b.price;
        });
        flightOptions.innerHTML = "";
        let count = 0;
        for(let i = 0; i < sortedFlightsLowToHigh.length; i++) {
            if(sortedFlightsLowToHigh[i].price <= parseInt(slider.value)) {
                count++;
                var newLoc = document.createElement('div');
                newLoc.className = 'flight-option';
                var locationName = document.createElement('p');
                locationName.innerHTML = sortedFlightsLowToHigh[i].to;
                var price = document.createElement('h4');
                price.innerHTML = "$" + sortedFlightsLowToHigh[i].price;
                var buttonForBook = document.createElement('button');
                buttonForBook.className = "book-button";
                buttonForBook.innerHTML = "Book Now";
                var image = document.createElement('img');
                image.className = "photo";
                image.src = "location-images/" + sortedFlightsLowToHigh[i].picture;

                newLoc.appendChild(locationName);
                newLoc.appendChild(image);
                newLoc.appendChild(price);
                newLoc.appendChild(buttonForBook);
        
                flightOptions.appendChild(newLoc);
            }
            
        }
        numOfResults.innerHTML = "Number of results: " + count;
    } else {
        updateCardsForPriceLimit();
    }
}

sortPrices.addEventListener('change', sortByPrice);

slider.addEventListener('input', function() {
    displayPrice.textContent = "$" + slider.value;
    sortPrices.value = "default";
    updateCardsForPriceLimit();
    const funMessage = document.getElementById('fun-message');
    if(slider.value == 0) {
        if(!funMessage) {
            const funMessage = document.createElement('h1');
            funMessage.id = "fun-message";
            funMessage.innerHTML = "Thought you would find a free flight, huh? Sorry to disappoint...";
            document.body.appendChild(funMessage);
        }
    }  else if(funMessage) {
        funMessage.parentNode.removeChild(funMessage);
    }

});

document.addEventListener("DOMContentLoaded", displayLocationCards )