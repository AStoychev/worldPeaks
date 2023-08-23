import styles from "../SelectButton/SelectButton.module.css"

export const FilterDropDown = ({
    buttonName,
    handleOpen,
}) => {

    return (
        <div>
            <button className={styles.buttonHeightFilter} onClick={handleOpen} value={buttonName}>{buttonName}</button>
        </div>
    );
}
