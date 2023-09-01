import { useState, useEffect } from 'react';

import { onlyUnique } from '../../functions/onlyUniques';
import { onFilterByHight } from '../../functions/onFilterByHight';
import { onFilterByContinents } from '../../functions/onFilterByContinents';
import { onFilterByCountries } from '../../functions/onFilterByCountries';
import { getCoordinates } from '../../functions/getCoordinates';

import { MapDropDown } from '../../utils/buttons/Dropdown/MapDropDown';
import { Search } from '../Seacrch/Search';
import { MyFavorite } from '../../utils/MyFavorites/MyFavorites';

// import { useMap } from "react-leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { customIcon } from '../../utils/customIcons';

import { mostHighPeaksOnEveryContinent } from '../../utils/constants/mostHighPeaksOnEveryContinent';
import all_data from "../../data/all_peaks_over_2000_meters_data.json"

import { AiFillHeart } from 'react-icons/ai'
import "leaflet/dist/leaflet.css";
import "./style.css"

export const Map = () => {

    const [peaks, setPeaks] = useState([]);
    const [checked, setChecked] = useState([]);

    // Try stop button click when map go to location
    const [fly, setFly] = useState(false)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onHeightFilter = (e) => {
        let event = e.target.value;
        let splitEvent = event.split(" ");
        let getLastEventItem = splitEvent.pop().split("-")
        let filterByPeakHight = getLastEventItem[0]
        setPeaks(onFilterByHight(peaks, filterByPeakHight))
    };

    const onContinentFilter = (e) => {
        setPeaks(onFilterByContinents(e.target.value))
    };

    const onCountryChange = (e) => {
        let updatedList = [...checked];
        if (e.target.checked) {
            updatedList = [...checked, e.target.value];
        } else {
            updatedList.splice(checked.indexOf(e.target.value), 1);
        }
        setChecked(updatedList);
    };

    const onCountryFilter = () => {
        setPeaks(onFilterByCountries(checked).filter(onlyUnique))
        setShow(false)
    };

    const onClearAllFilter = () => {
        setPeaks([])
    };

    // Search
    const getDataFromSearch = (newData) => {
        let searchData = []
        for (let i in all_data) {
            if (all_data[i].name === newData)
                searchData.push(all_data[i])

        }
        if (searchData.length) {
            setPeaks(searchData);
        }
    }

    // Go to peak
    const GoToPeak = () => {
        const map = useMap();

        if (peaks.length === 1) {
            map.flyTo(getCoordinates(peaks), map.zoom = 18);
        }
        else if (peaks.length > 1) {
            map.flyTo(getCoordinates(peaks), map.zoom = 4);
            // map.flyTo(getCoordinates(peaks), map.zoom = 5);
        } else {
            map.flyTo([51.505, -0.09], map.zoom = 3);
        }
    }

    // Save favorite place in local storage
    const [exist, setExist] = useState(Object.values(localStorage));

    const saveInFavorite = (e) => {
        localStorage.setItem(
            `id${e.target.value}`, e.target.value
            // `id${e.target.value}`, JSON.stringify(e.target.value)
        );
        let keys = Object.values(localStorage)
        setExist(keys)
    }

    const checkIsFavorite = (id) => {
        for (let i in exist) {
            if (Number(exist[i]) === id) {
                return true
            }
        }
    }

    const deleteFavorite = (deleteItem) => {
        // This check is because whet we try to delete from direct modal we use alt and when delete from map we use value
        if(deleteItem.target) {
            deleteItem = deleteItem.target.value
        }
        localStorage.removeItem(`id${deleteItem}`)
        setExist(Object.values(localStorage))
    }

    // Button My Favorite
    const [modalOpen, setModalOpen] = useState(false);
    const modalClose = () => {
        setModalOpen(false);
    };

    const goTo = (data) => {
        setPeaks(data)
    };

    const handleCloseFavorite = () => {
        setModalOpen(<MyFavorite onClose={modalClose} goTo={goTo} deleteFavorite={deleteFavorite} />);
    };
    // Save favorite place in local storage

    // Close modal after click outside
    const clickOutside = (e) => {
        if (modalOpen != false && e.target.closest("#mainPopup") === null) {
            setModalOpen(false)
        }
        // if(e.target.matches(".mapContainer")){
        //     setModalOpen(false)
        // }
    }

    return (
        <div className="sectionStyle" onClick={clickOutside}>
            {modalOpen}

            <MapContainer center={[51.505, -0.09]} zoom={3} className="mapContainer" scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <div className="search-container">
                    <MapDropDown
                        onClearAllFilter={onClearAllFilter}
                        onHeightFilter={onHeightFilter}
                        onContinentFilter={onContinentFilter}
                        show={show}
                        handleShow={handleShow}
                        handleClose={handleClose}
                        onCountryChange={onCountryChange}
                        onCountryFilter={onCountryFilter}
                        peaks={peaks}
                    />
                    <Search getDataFromSearch={getDataFromSearch} />
                    <GoToPeak />
                </div>

                <div className='myFavorites'>
                    <button className="navigationLinkFavorite" onClick={handleCloseFavorite}><AiFillHeart /></button>
                </div>

                {peaks.map(peak => (
                    <Marker position={[peak.latitude, peak.longitude]} icon={customIcon} key={[peak.latitude, peak.name]}>
                        <Popup>
                            Peak Name: {peak.name}
                            <br />
                            Meters: {peak.meters}
                            <br />
                            Feet: {peak.feet}
                            <br />
                            {peak.regions ? `Country: ${peak.regions}` : ""}
                            <br />
                            {peak.countries ? `Country: ${peak.countries}` : ""}
                            <br />
                            {checkIsFavorite(peak.id)
                                ?
                                <div className="deleteDiv">
                                    <button className="deleteFavorite" value={peak.id} onClick={deleteFavorite}>Delete from <AiFillHeart /></button>
                                </div>
                                :
                                <div className="checkboxWrapper">
                                    <form id={peak.id}>
                                        <div className="addFavorite">
                                            <input type="checkbox" id="heart" name="heart" value={peak.id} onClick={saveInFavorite} />
                                            <label htmlFor="heart">❤</label>
                                        </div>
                                    </form>
                                </div>
                            }
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

        </div>
    );
}