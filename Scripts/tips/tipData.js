const tipsCollection = [
    {
        action: "Regulate the nitrogen cycle",
        reason: "The nitrogen cycle is the process in which ammonia is converted by bacteria to nitrite and then to nitrate. Both ammonia and nitrite are toxic to fish, and so having bacteria colonies in your fish tank is essential to convert them harmful compounds to nitrate.To keep the nitrates in low concentration";
        
    },
    {
        action: "Remove dissolved and particulate organic compounds",
        reason: "Organic matter is classified into dissolved organic matter (DOM) and particulate organic matter (POM). DOM is defined as any organic material which can pass through 0.2 0 1.0 um filters, whilst POM will not pass through. Organic matter includes any waste which is made as a natural by-product of having a tank full of fish which are regularly fed. Just like ammonia is broken down by the colonies of bacteria, so is food waste and other organic matters in your tank.";
    },
    {
        action: "To replenish minerals",
        reason: "When fish are kept in water with insufficient minerals, either too high or too low, this can result in osmotic stress, which can in turn lead to osmotic shock, and ultimately death. Often when fish keepers add water to their tank, they use RO water, that is water, which has been through the reverse osmosis process. This process removes the vast majority of tap water impurities, but it also removes the essential minerals which your fish need. Therefore you should use a product to add these essential minerals back into the aquarium."
    }

];

export const getTips = () => {
    return tipsCollection;
};
