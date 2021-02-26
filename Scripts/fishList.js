import { Fish } from "./Fish.js"
import { getFish } from "./fishData.js"


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