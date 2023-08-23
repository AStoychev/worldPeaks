import styles from "./SelectButton.module.css"

export const ClearButton = ({
    buttonName,
    handleOpen,
}) => {

    return (
        <div>
            <button className={styles.buttonHeightFilter} onClick={handleOpen} value={buttonName}>{buttonName}</button>
        </div>
    );
}
