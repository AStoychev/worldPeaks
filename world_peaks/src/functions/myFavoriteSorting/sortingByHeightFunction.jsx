export const sortByHeightFunction = (peak, sortHight) => {
    let peakA = "";
    let peakB = "";
    const itemsCopy = [...peak];

    itemsCopy.sort((itemA, itemB) => {
        peakA = itemA.meters;
        peakB = itemB.meters;

        if (sortHight === "asc") {
            return peakA - peakB
        } else {
            return peakB - peakA
        }
    });
    return itemsCopy
}