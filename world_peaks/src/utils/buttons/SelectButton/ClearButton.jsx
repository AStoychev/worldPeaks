import styles from "./SelectButton.module.css"

export const ClearButton = ({
    onClearAllFilter,
}) => {

    return (
        <div>
            <button className={styles.buttonHeightFilter} onClick={onClearAllFilter} value="Clear All">Clear Filter
                <span className={styles.clearFilter}>X</span>
            </button>
        </div>
    );
}
