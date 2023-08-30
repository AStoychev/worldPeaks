import { useState } from "react"

import { deleteFavorite } from "../../functions/deleteFavorite"

import { useMap } from "react-leaflet";

import all_data from "../../data/all_peaks_over_2000_meters_data.json"

import styles from "./MyFavorites.module.css"

export const MyFavorite = ({
    onClose,
    goTo,
    deleteFavorite,
}) => {

    const handleClose = () => {
        onClose()
    }

    const appendPeakInModal = () => {
        let favoriteItems = [];
        let favoriteKeys = Object.values(localStorage);
        for (let peak in all_data) {
            for (let i in favoriteKeys) {
                if (Number(favoriteKeys[i]) === all_data[peak].id) {
                    favoriteItems.push(all_data[peak])
                }
            }
        }
        return favoriteItems
    }

    const goToChooseFavoritePeak = (id) => {
        let favoriteItems = [];
        for (let peak in all_data) {
            if (Number(id) === all_data[peak].id) {
                favoriteItems.push(all_data[peak])
            }

        }
        return favoriteItems
    }

    const goToFavorite = (e) => {
        // let goToFavoritePeak = appendPeakInModal();
        let goToFavoritePeak = goToChooseFavoritePeak(e.target.value)
        goTo(goToFavoritePeak)
        onClose()
    }

    const onDelete = (e) => {
        deleteFavorite(e)
        // deleteFavorite(e.target.value)
        setItem(appendPeakInModal)
    }

    const [item, setItem] = useState(appendPeakInModal)

    return (
        <div>
            <div className={styles.popup}>
                <div className={styles.container}>
                    <button className={styles.closeButton} onClick={handleClose}>&times;</button>
                    <h2>Favorite</h2>
                    <div className={styles.paragraphCookie}>
                        Your favorite peaks are saved in your browser. If you open the application
                        from another browser or device, they will not be saved!
                    </div>
                    <div>
                        {item.length
                            ?
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th>Continent</th>
                                        <th>Meters</th>
                                        <th>Go To</th>
                                        <th>Delete</th>
                                    </tr>
                                    {item.map(x => (
                                        <tr key={x.id}>
                                            <td>{x.name}</td>
                                            <td>{x.continent}</td>
                                            <td>{x.meters}</td>
                                            <td><button style={{ color: "green" }} value={x.id} onClick={goToFavorite}>O</button></td>
                                            <td><button style={{ color: "red" }} value={x.id} onClick={onDelete}>X</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            :
                            <div>You don't have favorite peaks yet!</div>}
                    </div>
                    <button className={styles.letsGoButton} onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    );
}
