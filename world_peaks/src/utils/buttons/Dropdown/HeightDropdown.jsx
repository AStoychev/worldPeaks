import { useState } from "react";

import { SelectButton } from "../SelectButton/SelectButton";
import { HeightFilterButton } from '../HeightFilterButton/HeightFilterButton';

export const HeightDropdown = ({
    onHeightFilter,
    // onOpen,
}) => {
    const [open, setOpen] = useState(false);

    const [choose, setChoose] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
        // onOpen(["Height", !open])
    };

    return (
        <div className="dropdown">
            <SelectButton buttonName={"Select Height"} handleOpen={handleOpen}/>
            {/* <button onClick={handleOpen}>Select Height</button> */}
            {open ? (
                <div>
                    < HeightFilterButton buttonName={"Over 8000m"} onHeightFilter={onHeightFilter} />
                    < HeightFilterButton buttonName={"Between 7000-8000m"} onHeightFilter={onHeightFilter} />
                    < HeightFilterButton buttonName={"Between 6000-7000m"} onHeightFilter={onHeightFilter} />
                    < HeightFilterButton buttonName={"Between 5000-6000m"} onHeightFilter={onHeightFilter} />
                    < HeightFilterButton buttonName={"Between 4000-5000m"} onHeightFilter={onHeightFilter} />
                    < HeightFilterButton buttonName={"Between 3000-4000m"} onHeightFilter={onHeightFilter} />
                    < HeightFilterButton buttonName={"Below 3000m"} onHeightFilter={onHeightFilter} />
                </div>
            ) : null}
            {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
        </div>
    );
} 
