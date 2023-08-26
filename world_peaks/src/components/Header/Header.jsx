import { useState } from 'react';
import { Link } from 'react-router-dom';

import { OnLoad } from '../../utils/onLoad/onLoad';

import styles from "./Header.module.css"

export const Header = () => {

    // Show first modal
    const onLoadModal = (data) => {
        if (data === "Close") {
            setShowModal()
        }
    }
    const [showModal, setShowModal] = useState(<OnLoad onLoadModal={onLoadModal} />)
    // Show first modal

    return (
        <>
            <div className={styles.flexContainer} onLoad={onLoadModal}>
            <div>{showModal}</div>
                <div className={styles.navigation}>
                    <div className={styles.navigationChild}>
                        <Link className={styles.navigationLink} to="/">Home</Link>
                        <Link className={styles.navigationLink} to="/about">About</Link>
                    </div>
                </div>
                <div className={styles.navigation}>
                    <Link className={styles.navigationLinkLogo} to="/">
                        <div className={styles.container}>
                            <h1>World</h1>
                            <h2>Peaks</h2>
                            <div>
                                <img className={styles.logo} src="images/logo.png" alt="logo" />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.navigation}></div>
            </div>
        </>
    );
}
