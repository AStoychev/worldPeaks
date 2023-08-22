export const givePeakBetween3000And4000 = (data) => {
    let peak = []
    for (let i in data) {
        if(data[i]["meters"] >= 3000 && data[i]["meters"] <= 4000) {
            peak.push(data[i])
        }
    }
    return peak
}
