export const givePeakBetween7000And8000 = (data) => {
    let peak = []
    for (let i in data) {
        if(data[i]["meters"] >= 7000 && data[i]["meters"] <= 8000) {
            peak.push(data[i])
        }
    }
    return peak
}
