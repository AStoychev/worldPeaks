export const getCoordinates = (place) => {
    let coordinates = []

    if (place.length > 1) {
        place = place[0]
        coordinates.push(place.latitude, place.longitude)
    } else {
        place.map(x => (
            coordinates.push(x.latitude, x.longitude)
        ))
    }
    
    return coordinates
}