import { Link } from 'react-router-dom';

import styles from "./Header.module.css"

export const Header = () => {
    return (
        <>
            <div className={styles.navigation}>
                <Link className={styles.navigationLink} to="/">Home</Link>
                <Link className={styles.navigationLink} to="/about">About</Link>
            </div>
            <Link className={styles.logoLink} to="/">
                <div className={styles.container}>
                    <h1>World</h1>
                    <h3>Peaks</h3>
                    <div>
                        <img className={styles.logo} src="images/logo.png" alt="logo" />
                    </div>
                </div>
            </Link>
        </>
    );
}
