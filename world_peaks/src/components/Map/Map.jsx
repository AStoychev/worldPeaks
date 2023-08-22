import { useState, useEffect } from 'react';

import { onlyUnique } from '../../functions/onlyUniques';
import { onFilterByHight } from '../../functions/onFilterByHight';
import { onFilterByContinents } from '../../functions/onFilterByContinents';
import { onFilterByCountries } from '../../functions/onFilterByCountries';
import { ModalFilterByCountry } from '../../utils/modals/ModalFilterByCountry';
import { getCoordinates } from '../../functions/getCoordinates';

import { Search } from '../Seacrch/Search';
import { HeightDropdown } from '../../utils/buttons/Dropdown/HeightDropdown';
import { ContinentDropdown } from '../../utils/buttons/Dropdown/ContinentDropdown';

import { SelectButton } from '../../utils/buttons/SelectButton/SelectButton';

import { useMap } from "react-leaflet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { customIcon } from '../../utils/customIcons';

import all_data from "../../data/all_peaks_over_2000_meters_data.json"

import "leaflet/dist/leaflet.css";
import "./style.css"

export const Map = () => {

    const [peaks, setPeaks] = useState([]);
    const [checked, setChecked] = useState([]);

    // const [heightBtn, setHeightBtn] = useState();
    // const [continentBtn, setContinentBtn] = useState();
    // const onOpen = (data) => {
    //     if (data[0] === "Height") {
    //         setHeightBtn(data[1])
    //     } else if (data[0] === "Continent") {
    //         setContinentBtn(data[1])
    //     }
    // }

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
        useEffect(() => {
            map.locate().on("locationfound", function (e) {
                if (peaks.length === 1) {
                    map.flyTo(getCoordinates(peaks), map.zoom = 18);
                }
            })
        })
    }

    return (
        <div className="sectionStyle">
            <MapContainer center={[51.505, -0.09]} zoom={3} className="mapContainer" scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <div className="search-container">
                    <SelectButton buttonName={"Clear All"} handleOpen={onClearAllFilter} />
                    <HeightDropdown onHeightFilter={onHeightFilter} />
                    <ContinentDropdown onContinentFilter={onContinentFilter} />
                    <ModalFilterByCountry
                        show={show}
                        handleShow={handleShow}
                        handleClose={handleClose}
                        onCountryChange={onCountryChange}
                        onCountryFilter={onCountryFilter}
                    />
                    <Search getDataFromSearch={getDataFromSearch} />
                    <GoToPeak />
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
                            Region: {peak.regions}
                            <br />
                            {peak.countries ? `Country: ${peak.countries}` : ""}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

        </div>
    );
}