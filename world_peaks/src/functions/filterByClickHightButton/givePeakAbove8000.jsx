export const givePeakAbove8000 = (data) => {
    let peak = []
    for (let i in data) {
        if(data[i]["meters"] >= 8000) {
            peak.push(data[i])
        }
    }
    return peak
}
