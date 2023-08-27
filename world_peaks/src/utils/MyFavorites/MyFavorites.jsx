import { useState } from "react"

import { deleteFavorite } from "../../functions/deleteFavorite"

import all_data from "../../data/all_peaks_over_2000_meters_data.json"

import styles from "./MyFavorites.module.css"

export const MyFavorite = ({
    onClose
}) => {

    const handleClose = () => {
        onClose()
    }
    let favoriteKeys = Object.values(localStorage);


    const appendPeak = () => {
        let favoriteItems = []
        for (let peak in all_data) {
            for (let i in favoriteKeys) {
                if (Number(favoriteKeys[i]) === all_data[peak].id) {
                    favoriteItems.push(all_data[peak])
                    // console.log(all_data[peak])
                    // setItem("Good")
                }
            }
        }
        return favoriteItems
    }

    const onDelete = (e) => {
        console.log(e.target.value)
        deleteFavorite(e)
        setItem(appendPeak)
    }

    const [item, setItem] = useState(appendPeak)

    console.log(item)

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
                                        <td><button style={{ color: "green" }}>O</button></td>
                                        <td><button style={{ color: "red" }} value={x.id} onClick={onDelete}>X</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* {item.map(x => (
                        <div key={x.id}>
                            <div>{x.name}</div>
                        </div>
                    ))} */}
                    <button className={styles.letsGoButton} onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    );
}
