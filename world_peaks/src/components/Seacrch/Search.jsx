import { useState, useEffect } from "react"

import all_data from "../../data/all_peaks_over_2000_meters_data.json"

import Fade from 'react-bootstrap/Fade';
import styles from './Search.module.css'


export const Search = ({
    getDataFromSearch,
}) => {

    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    const [found, setFound] = useState(true);

    // Get all products
    const [allPeaks, setAllPeaks] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            setAllPeaks(all_data);
        }
        fetchData()
    }, []);
    // Get all products

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSearch = (searchTerm) => {
        for (let i in all_data) {
            if (all_data[i].name === searchTerm) {
                setValue(searchTerm)
            }
        }
    }

    // Send data to Section
    const ClickHandler = () => {
        // Check for existing peak
        let allPeaks = []
        for (let i in all_data) {
            allPeaks.push(all_data[i].name)
        }

        if(!allPeaks.includes(value)) {
            setFound(false)
        }

        setTimeout(() => {
            setFound(true)
        }, 2000)
        
        // Check for existing peak
        getDataFromSearch(value)
    }
    // Send data to Section

    return (
        <>
            <div className={styles.searchBar}>
                <button className={styles.imageBtn}
                    onClick={() => setOpen(!open)} >
                    {
                        !open ?
                            <img src="../images/magnifying-glass.png" alt="Search" title="Search"></img>
                            :
                            <img src="../images/close.png" alt="Close" title="Close Search"></img>
                    }
                </button>
                <div >
                    <Fade in={open}>
                        <div className={styles.searchContainer}>
                            <div className={styles.searchInner}>
                                <input className={styles.searchInput} type="search" value={value} onChange={onChange} />
                                <button className={styles.searchBtn} variant="info" onClick={ClickHandler}>Search</button>
                            </div>
                            <div className={styles.dropdown}>
                                {allPeaks
                                    .filter(item => {
                                        const searchTerm = value.toLowerCase();
                                        const place = item.name.toLowerCase();

                                        return searchTerm && place.startsWith(searchTerm) && place !== searchTerm
                                        // Slice function give limit of the show results
                                    }).slice(0, 5)
                                    .map((item) => (
                                        <div
                                            onClick={() => onSearch(item.name)}
                                            className={styles.dropdownRow}
                                            key={item.id}
                                        >
                                            <span className={styles.spanFindPlace}>{item.name}</span>
                                        </div>
                                    ))}
                            </div>
                            {/* Not Found */}
                            {!found &&
                                <div className={styles.notFoundField}>
                                    <span className={styles.spanNotFound}>Not Found</span>
                                </div>
                            }
                            {/* Not Found */}
                        </div>
                    </Fade >
                </div >
            </div>

        </>
    )
    // )
}