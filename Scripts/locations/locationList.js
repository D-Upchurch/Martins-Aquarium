import { getLocation } from './locationData.js';
import { Location } from './location.js';

export const locationList = () => {
    const locations = getLocation()
    const DOMLocation = document.querySelector(".locationList")

        let locationHTMLRep = "";
        for (const oneLocation of locations) {
            locationHTMLRep += Location(oneLocation);
        }
        console.log("locationHTMLRep", locationHTMLRep);
    DOMLocation.innerHTML = locationHTMLRep;
}