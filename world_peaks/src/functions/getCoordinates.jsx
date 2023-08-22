export const getCoordinates = (place) => {
    let coordinates = []
    place.map(x => (
        coordinates.push(x.latitude, x.longitude)
    ))
    return coordinates
}