import { getFish } from "./fishData.js"
import { Fish } from "./Fish.js"

export const fishList = () => {
		const contentElement = document.querySelector(".fishList")
		const fishes = getFish()
				let fishHTMLRepresentation = "";
				for (const oneThingFromTheSea of fishes) {
								fishHTMLRepresentation += Fish(oneThingFromTheSea);
		contentElement.innerHTML += `
				${fishHTMLRepresentation}
	`
                }
}