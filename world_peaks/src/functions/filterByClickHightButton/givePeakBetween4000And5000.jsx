export const givePeakBetween4000And5000 = (data) => {
    let peak = []
    for (let i in data) {
        if(data[i]["meters"] >= 4000 && data[i]["meters"] <= 5000) {
            peak.push(data[i])
        }
    }
    return peak
}
