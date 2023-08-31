export const sortByNameFunction = (peak, sortName) => {
    let peakA = "";
    let peackB = "";
    const itemsCopy = [...peak];

    itemsCopy.sort((itemA, itemB) => {
        peakA = itemA.name;
        peackB = itemB.name;

        if (sortName === "asc") {
            return peakA.localeCompare(peackB);
        } else {
            return peackB.localeCompare(peakA);
        }
    });
    return itemsCopy
}