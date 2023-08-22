import all_data from "../data/all_peaks_over_2000_meters_data.json"

export const onFilterByContinents = (filterPeakByContinent) => {
    let filtredItems = []
    for (let i in all_data) {
        if(filterPeakByContinent === "Australia and Oceania") {
            filterPeakByContinent = "Australia/Oceania"
        }
        
        if(all_data[i]["continent"] === filterPeakByContinent) {
            filtredItems.push(all_data[i])
        }
    }

    return filtredItems
}
