import { SelectButton } from "../SelectButton/SelectButton";
import { ContinentsFilterButton } from "../ContinentsFilterButton/ContinentsFilterButton";

export const ContinentDropdown = ({
    onContinentFilter,
    showOpen,
    dropDownContinents
}) => {
    const handleOpen = () => {
        showOpen("Continent", !dropDownContinents)
    };

    return (
        <div className="dropdown">
            <SelectButton buttonName={"Continent"} handleOpen={handleOpen} />
            {dropDownContinents ? (
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
        </div>
    );
}