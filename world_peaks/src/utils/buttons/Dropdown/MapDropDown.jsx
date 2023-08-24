import { useState } from "react";
import { FilterDropDown } from "./FilterDropDown";
import { ClearButton } from "../SelectButton/ClearButton";
import { SelectButton } from "../SelectButton/SelectButton";
import { HeightDropdown } from "./HeightDropdown";
import { ContinentDropdown } from "./ContinentDropdown";
import { ModalFilterByCountry } from "../../modals/ModalFilterByCountry";

import styles from "./MapDropDown.module.css"

export const MapDropDown = ({
    onClearAllFilter,
    onHeightFilter,
    onContinentFilter,
    show,
    handleShow,
    handleClose,
    onCountryChange,
    onCountryFilter,
    peaks
}) => {
    const [open, setOpen] = useState(false);
    const [dropDownHeight, setDropDownHeight] = useState(false)
    const [dropDownContinents, setDropDownContinents] = useState(false)

    const showOpen = (type, data) => {
        if (type === "Height" && dropDownContinents === true) {
            setDropDownHeight(data)
            setDropDownContinents(!data)
        } else if (type === "Continent" && dropDownHeight === true) {
            setDropDownContinents(data)
            setDropDownHeight(!data)
        } else {
            if (type === "Height") {
                setDropDownHeight(data)
            } else if (type === "Continent") {
                setDropDownContinents(data)
            }
        }
    }

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={styles.dropdown}>
            {open ?
                <FilterDropDown buttonName={`Filter ⏶`} handleOpen={handleOpen} />
                : <FilterDropDown buttonName={`Filter ⏷`} handleOpen={handleOpen} />
            }
            {open ? (
                <div>
                    {peaks.length ? <ClearButton onClearAllFilter={onClearAllFilter} /> : ""}
                    <ModalFilterByCountry
                        show={show}
                        handleShow={handleShow}
                        handleClose={handleClose}
                        onCountryChange={onCountryChange}
                        onCountryFilter={onCountryFilter}
                    />
                    <HeightDropdown
                        onHeightFilter={onHeightFilter}
                        showOpen={showOpen}
                        dropDownHeight={dropDownHeight}
                    />
                    <ContinentDropdown
                        onContinentFilter={onContinentFilter}
                        showOpen={showOpen}
                        dropDownContinents={dropDownContinents}
                    />
                </div>
            ) : null}
        </div>
    );
}
