// Very complex feature and requires refactoring

import all_data from "../data/all_peaks_over_2000_meters_data.json"

export const onFilterByCountries = (filterPeakByCountry) => {
    let filtredItems = []
    for (let i in all_data) {
        if (all_data[i]["countries"]) {
            for (let item in filterPeakByCountry) {
                if (all_data[i]["countries"][1]) {
                    if (all_data[i]["countries"][1] === filterPeakByCountry[item]) {
                        filtredItems.push(all_data[i])
                    }
                }
                if (all_data[i]["countries"][0] === filterPeakByCountry[item]) {
                    filtredItems.push(all_data[i])
                }
                // let intersection = all_data[i]["countries"].filter(element => filterPeakByCountry.includes(element));
            }
        }

    }

    return filtredItems
}
