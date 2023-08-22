export const givePeakBetween5000And6000 = (data) => {
    let peak = []
    for (let i in data) {
        if(data[i]["meters"] >= 5000 && data[i]["meters"] <= 6000) {
            peak.push(data[i])
        }
    }
    return peak
}
