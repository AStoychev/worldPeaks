export const deleteFavorite = (id) => {
    localStorage.removeItem(`id${id}`)
}
