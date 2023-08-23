import styles from "./Header.module.css"

export const Header = () => {
    return (
        <div className={styles.container}>
            <h1>World</h1>
            <h3>Peaks</h3>
            <div>
                <img className={styles.logo} src="images/logo.png" alt="logo" />
            </div>
        </div>
    );
}
