import { Fish } from "./fish/Fish.js"
import { getFish } from "./fish/fishData.js"


export const fishList = () => {
			const fishes = getFish()	
			const DOMLocation = document.querySelector(".fishList")
		
				let fishHTMLRepresentation = "";
				for (const oneThingFromTheSea of fishes) {
								fishHTMLRepresentation += Fish(oneThingFromTheSea);
				}
				console.log("fishHTMLRepresentations", fishHTMLRepresentation);
		DOMLocation.innerHTML = fishHTMLRepresentation;
                
}