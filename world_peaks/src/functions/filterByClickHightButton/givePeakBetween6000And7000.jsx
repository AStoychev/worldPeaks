export const givePeakBetween6000And7000 = (data) => {
    let peak = []
    for (let i in data) {
        if(data[i]["meters"] >= 6000 && data[i]["meters"] <= 7000) {
            peak.push(data[i])
        }
    }
    return peak
}
