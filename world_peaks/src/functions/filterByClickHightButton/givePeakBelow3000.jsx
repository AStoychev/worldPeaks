export const givePeakBelow3000 = (data) => {
    let peak = []
    for (let i in data) {
        if(data[i]["meters"] <= 3000) {
            peak.push(data[i])
        }
    }
    return peak
}
