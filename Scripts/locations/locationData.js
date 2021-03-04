const locationCollection = [
    {
        locationVisited: "Pacific Ocean",
        locationType: "Ocean",
    },
    {
        locationVisited: "Bali",
        locationType: "Island",
    },
    {
        locationVisited: "Atlantic Ocean",
        locationType: "Ocean",
    },
    {
        locationVisited: "Gulf of Mexico",
        locationType: "Gulf",
    },
    {
        locationVisited: "Amazon River",
        locationType: "River",
    },
    {
        locationVisited: "Mississipi River",
        locationType: "River",
    },
    {
        locationVisited: "Bobby's Fish Emporium",
        locationType: "Retailer",
    },
    {
        locationVisited: "Cumberland River",
        locationType: "River",
    },
    {
        locationVisited: "Petsmart",
        locationType: "Retailer",
    },
    {
        locationVisited: "Lake Tahoe",
        locationType: "Lake",
    },
    {
        locationVisited: "Caribbean Sea",
        locationType: "Sea",
    },
    {
        locationVisited: "Barbados",
        locationType: "Island",
    },
    {
        locationVisited: "Tennessee River",
        locationType: "River",
    },
    {
        locationVisited: "Red Sea",
        locationType: "Sea",
    },
    {
        locationVisited: "New Zealand",
        locationType: "Island",
    },
    {
        locationVisited: "Bikini Bottom",
        locationType: "City",
    },
    {
        locationVisited: "Port Innsmouth",
        locationType: "City",
    },
    {
        locationVisited: "St. Croix",
        locationType: "City",
    },
    {
        locationVisited: "Minnesota",
        locationType: "State",
    },
    {
        locationVisited: "Baltic Sea",
        locationType: "Sea",
    },
];

export const getLocation = () => {
    return locationCollection
};

export const getFilteredLocation = () => {
    return filteredLocationList
};

const filteredLocationList = locationCollection.filter(locationObj => { 
    if (locationObj.locationType === "Ocean" || locationObj.locationType === "Sea")
        return true
});

    
    
