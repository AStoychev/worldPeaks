import styles from "./SelectButton.module.css"

export const SelectButton = ({
    buttonName,
    handleOpen,
    closeOtherDropdown,
}) => {

    // const openCloseFunction = () => {
    //     handleOpen()
    //     closeOtherDropdown()
    // }
    return (
        <div>
            <button className={styles.buttonHeightFilter} onClick={handleOpen} value={buttonName}>{buttonName}</button>
        </div>
    );
}