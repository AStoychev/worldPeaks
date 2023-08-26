import { useState } from 'react';
import { Link } from 'react-router-dom';

import { OnLoad } from '../../utils/onLoad/onLoad';

import Cookies from 'universal-cookie';

import styles from "./Header.module.css"

export const Header = () => {

    // Show first modal
    const cookies = new Cookies(null, { path: '/' });
    const onLoadModal = (data) => {
        if (data === "Close") {
            cookies.set('popup', 'Hello')
            setPopup()
        }
    };

    const [popup, setPopup] = useState()
    const lookForCookies = () => {
        if (!cookies.get('popup')) {
            setPopup(<OnLoad onLoadModal={onLoadModal} />)
        }
    }
    // Show first modal


    return (
        <>
            <div className={styles.flexContainer} onLoad={lookForCookies}>
                {popup}
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
