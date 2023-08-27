import { Link } from "react-router-dom"

import styles from "./popUp.module.css"

export const OnLoad = ({
    onLoadModal
}) => {
    const handleClose = () => {
        onLoadModal("Close")
    }
    return (
        <div>
            <div className={styles.popup}>
                <div className={styles.container}>
                    {/* <button className={styles.closeButton} onClick={handleClose}>&times;</button> */}
                    <h2>Hello</h2>
                    <div className={styles.paragraphCookie}>
                        This website collects cookies to deliver better user experience!
                    </div>
                    <p>
                        WorldPeaks is application where you can find all the peaks in the world
                        up to 2000 meters high. The main purpose of the app is to showcase my
                        React skills. So the information for some peaks may be wrong. If you
                        find the wrong information, please feel free to contact me through some
                        of the ways listed on the <Link className={styles.aboutLink} to="/about">About</Link> page.
                    </p>
                    <button className={styles.letsGoButton} onClick={handleClose}>Let's Go</button>
                </div>
            </div>
        </div>
    );
}
