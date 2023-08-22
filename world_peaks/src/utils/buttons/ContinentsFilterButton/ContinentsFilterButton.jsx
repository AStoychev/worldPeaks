import styles from "../HeightFilterButton/HeightFilterButton.module.css"

export const ContinentsFilterButton = ({
    onContinentFilter,
    buttonName,
}) => {
    return (
        <div>
            <button className={styles.buttonHeightFilter} onClick={onContinentFilter} value={buttonName}>{buttonName}</button>
        </div>
    );
}
