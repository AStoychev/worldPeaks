import { useState } from "react"

import { sortByHeightFunction } from "../../functions/myFavoriteSorting/sortingByHeightFunction";
import { sortByNameFunction } from "../../functions/myFavoriteSorting/sortingByNameFunction";
import { switchSort } from "../../functions/myFavoriteSorting/switchSort";

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

    // Sorting
    const [sortHight, setSortHight] = useState("asc");
    const [sortName, setSortName] = useState("asc");

    const sortByHeight = (peak) => {
        setSortHight(switchSort(sortHight));
        setItem(sortByHeightFunction(peak, sortHight))
    }

    const sortByName = (peak) => {
        setSortName(switchSort(sortName));
        setItem(sortByNameFunction(peak, sortName))
    }
    // Sorting

    return (
        <div>
            <div id="mainPopup" className={styles.popup}>
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
                            <table className={styles.table}>
                                <tbody>
                                    <tr className={styles.infoForPeeks}>
                                        <th className={styles.infoForPeeksEl}>
                                            <button className={styles.sortingButton} onClick={() => sortByName(item)}>
                                                Name
                                            </button>
                                        </th>
                                        <th className={styles.infoForPeeksEl}>Continent</th>
                                        <th className={styles.infoForPeeksEl}>
                                            <button className={styles.sortingButton} onClick={() => sortByHeight(item)}>
                                                Meters
                                            </button>
                                        </th>
                                        <th className={styles.infoForPeeksEl}>Delete</th>
                                    </tr>
                                    {item.map(x => (
                                        <tr className={styles.infoForPeeksElement} key={x.id}>
                                            <td>
                                                <button
                                                    className={styles.buttonGoTo} value={x.id} onClick={goToFavorite} title={`Go to ${x.name}`}>{x.name}
                                                </button>
                                            </td>
                                            <td>{x.continent}</td>
                                            <td>{x.meters}</td>
                                            <td>
                                                <button
                                                    className={styles.buttonDelete} value={x.id} onClick={onDelete} title={`Delete ${x.name}`}>
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            :
                            <div>You don't have favorite peaks yet!</div>}
                    </div>
                    <button className={styles.letsGoClose} onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    );
}
