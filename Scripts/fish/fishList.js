import { Fish } from './Fish.js'
import { getFish, getMostHolyFish, getSoldierFish, getUnworthyFish } from './fishData.js'


export const fishList = () => {
	// 1. Get the array of Fish
	const holyFish = getMostHolyFish();	
	const soldierFish = getSoldierFish();
	const unworthyFish = getUnworthyFish();
	console.log(holyFish);
	console.log(soldierFish);
	console.log(unworthyFish);
	const allFishes = holyFish.concat(soldierFish, unworthyFish);
	// 2. Get a reference to the location on the DOM where you want to display the list of fish
	const DOMLocation = document.querySelector(".fishList")
			// 3. Declare a variable to hold on to fish HTML representations
			let fishHTMLRepresentation = "";
			// 4. Loop over the array of fish and for each one, invoke the Fish component which returns HTML
			for (const oneThingFromTheSea of allFishes) {
				//do somthing with the onThingFromTheSea
				fishHTMLRepresentation += Fish(oneThingFromTheSea);
				};
			
		DOMLocation.innerHTML = fishHTMLRepresentation;
                
};
