import { useState } from "react";

import { SelectButton } from "../SelectButton/SelectButton";
import { ContinentsFilterButton } from "../ContinentsFilterButton/ContinentsFilterButton";

export const ContinentDropdown = ({
    onContinentFilter,
}) => {
    const [open, setOpen] = useState(false);

    const [choose, setChoose] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="dropdown">
            <SelectButton buttonName={"Continent"} handleOpen={handleOpen}/>
            {/* <button onClick={handleOpen}>Select Height</button> */}
            {open ? (
                <div>
                    < ContinentsFilterButton buttonName={"Africa"} onContinentFilter={onContinentFilter}/>
                    < ContinentsFilterButton buttonName={"Antarctica"} onContinentFilter={onContinentFilter}/>
                    < ContinentsFilterButton buttonName={"Asia"} onContinentFilter={onContinentFilter}/>
                    < ContinentsFilterButton buttonName={"Australia and Oceania"} onContinentFilter={onContinentFilter}/>
                    < ContinentsFilterButton buttonName={"Europe"} onContinentFilter={onContinentFilter}/>
                    < ContinentsFilterButton buttonName={"North America"} onContinentFilter={onContinentFilter}/>
                    < ContinentsFilterButton buttonName={"South America"} onContinentFilter={onContinentFilter}/>
                </div>
            ) : null}
            {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
        </div>
    );
} 
