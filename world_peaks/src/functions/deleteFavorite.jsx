export const deleteFavorite = (e) => {
    localStorage.removeItem(`id${e.target.value}`)
}
