import { useState } from "react";
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
    onCountryFilter
}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
        // onOpen(["Height", !open])
    };

    return (
        <div className={styles.dropdown}>
            {open ? 
            <SelectButton buttonName={`Filter ⏶`} handleOpen={handleOpen} /> 
            :<SelectButton buttonName={`Filter ⏷`} handleOpen={handleOpen} />
            }
            {open ? (
                <div>
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
                </div>
            ) : null}
            {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
        </div>
    );
}
