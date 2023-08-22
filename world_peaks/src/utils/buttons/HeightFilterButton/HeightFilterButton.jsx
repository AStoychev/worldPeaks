import styles from "./HeightFilterButton.module.css"

export const HeightFilterButton = ({
    buttonName,
    onHeightFilter,
}) => {
    return (
        <div>
            <button className={styles.buttonHeightFilter} onClick={onHeightFilter} value={buttonName}>{buttonName}</button>
        </div>
    );
}
