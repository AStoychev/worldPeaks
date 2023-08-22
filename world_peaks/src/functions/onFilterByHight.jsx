import all_data from "../data/all_peaks_over_2000_meters_data.json"

import { givePeakAbove8000 } from './filterByClickHightButton/givePeakAbove8000';
import { givePeakBetween7000And8000 } from './filterByClickHightButton/givePeakBetween7000And8000';
import { givePeakBetween6000And7000 } from './filterByClickHightButton/givePeakBetween6000And7000';
import { givePeakBetween5000And6000 } from './filterByClickHightButton/givePeakBetween5000And6000';
import { givePeakBetween4000And5000 } from './filterByClickHightButton/givePeakBetween4000And5000';
import { givePeakBetween3000And4000 } from './filterByClickHightButton/givePeakBetween3000And4000';
import { givePeakBelow3000 } from './filterByClickHightButton/givePeakBelow3000';

export const onFilterByHight = (peaks, filterByPeakHight) => {
    let filtredItems = []

    // if(peaks.length) {
    //     console.log(peaks)
    //     filterByPeakHight = peaks
    // }

    if (filterByPeakHight === "8000m") {
        filtredItems.push(givePeakAbove8000(all_data))
    } else if (filterByPeakHight === "7000") {
        filtredItems.push(givePeakBetween7000And8000(all_data))
    } else if (filterByPeakHight === "6000") {
        filtredItems.push(givePeakBetween6000And7000(all_data))
    } else if (filterByPeakHight === "5000") {
        filtredItems.push(givePeakBetween5000And6000(all_data))
    } else if (filterByPeakHight === "4000") {
        filtredItems.push(givePeakBetween4000And5000(all_data))
    } else if (filterByPeakHight === "3000") {
        filtredItems.push(givePeakBetween3000And4000(all_data))
    } else {
        filtredItems.push(givePeakBelow3000(all_data))
    }

    return filtredItems[0]
}
