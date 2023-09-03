import { useState } from "react"

import { sortByHeightFunction } from "../../functions/myFavoriteSorting/sortingByHeightFunction";
import { sortByNameFunction } from "../../functions/myFavoriteSorting/sortingByNameFunction";
import { switchSort } from "../../functions/myFavoriteSorting/switchSort";

import all_data from "../../data/all_peaks_over_2000_meters_data.json"

import { MdDeleteForever } from 'react-icons/md'
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
        let goToFavoritePeak = goToChooseFavoritePeak(e.target.value);
        goTo(goToFavoritePeak);
        onClose();
    }

    const onDelete = (e) => {
        let deleteItem = e.target.alt
        deleteFavorite(deleteItem);
        // deleteFavorite(e.target.value)
        setItem(appendPeakInModal);
    }

    const [item, setItem] = useState(appendPeakInModal)

    const showAllOnMap = () => {
        goTo(item);
        onClose();
    }

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

    // Hover Delete Icon
    const [hover, setHover] = useState(0)
    const onHover = (e) => {
        setHover(e.target.value)
    }
    const outHover = (e) => {
        setHover(0)
    }
    // Hover Delete Icon

    return (
        <div>
            <div id="mainPopup" className={styles.popup}>
                <div className={styles.container}>
                    <button className={styles.closeButton} onClick={handleClose}>&times;</button>
                    <h2>My Favorite</h2>
                    <div className={styles.paragraphCookie}>
                        Your favorite peaks are saved in your browser. If you open the application
                        from another browser or device, they will not be saved!
                    </div>
                    <div>
                        {item.length
                            ?
                            <div className={styles.table}>
                                <table>
                                    <tbody>
                                        <tr className={styles.infoForPeeks}>
                                            <th className={styles.infoForPeeksEl}>
                                                <button className={styles.sortingButton} onClick={() => sortByName(item)} title="Sort By Name">
                                                    Name
                                                </button>
                                            </th>
                                            <th className={styles.infoForPeeksEl}>
                                                <button className={styles.sortingButton} onClick={() => sortByHeight(item)} title="Sort By Height">
                                                    Meters
                                                </button>
                                            </th>
                                            <th className={styles.infoForPeeksEl}>Continent</th>
                                            {/* <th className={styles.infoForPeeksEl}>Delete</th> */}
                                        </tr>
                                        {item.map(x => (
                                            <tr className={styles.infoForPeeksElement} key={x.id}>
                                                <td>
                                                    <button
                                                        className={styles.buttonGoTo} value={x.id} onClick={goToFavorite} title={`Go to ${x.name}`}>{x.name}
                                                    </button>
                                                </td>
                                                <td>{x.meters}</td>
                                                <td>{x.continent}</td>
                                                <td>
                                                    <button
                                                        className={styles.buttonDelete} value={x.id} onClick={onDelete} onMouseEnter={onHover}
                                                        onMouseLeave={outHover} title={`Delete ${x.name}`}>
                                                        {/* <div className={styles.buttonDeleteIcon} >< MdDeleteForever value={x.id}/></div> */}
                                                        {Number(hover) === x.id ?
                                                            <img
                                                                src='../images/binOnHover.png'
                                                                alt={x.id}
                                                                value={x.id}
                                                                className={styles.buttonDeleteIcon}
                                                            />
                                                            :
                                                            <img
                                                                src='../images/bin.png'
                                                                alt={x.id}
                                                                value={x.id}
                                                                className={styles.buttonDeleteIcon}
                                                            />
                                                        }

                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            :
                            <div className={styles.noFavorite}>You don't have favorite peaks yet!</div>}
                    </div>
                    <div className={styles.buttonParent}>
                        <div className={styles.closeAndShowAllButtons}>
                            {item.length ?
                                <button className={styles.letsGoToAll} onClick={showAllOnMap}>Show All</button>
                                :
                                ""
                            }
                            <button className={styles.letsGoClose} onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
