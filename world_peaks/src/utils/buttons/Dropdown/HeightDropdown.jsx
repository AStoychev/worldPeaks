import { useState } from "react";

import { SelectButton } from "../SelectButton/SelectButton";
import { HeightFilterButton } from '../HeightFilterButton/HeightFilterButton';

export const HeightDropdown = ({
    onHeightFilter,
    showOpen,
    dropDownHeight,
}) => {
    const handleOpen = () => {
        showOpen("Height", !dropDownHeight)
    };

    return (
        <div className="dropdown">
            <SelectButton buttonName={"Select Height"} handleOpen={handleOpen} />
            {dropDownHeight ? (
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
        </div>
    );
} 