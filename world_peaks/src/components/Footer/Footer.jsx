import { Link } from 'react-router-dom';

import styles from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.divText}>
                FlyShop is made by <Link to="https://github.com/AStoychev" target="_blank" rel="noopener noreferrer" className={styles.linkGitHub}>
                    A.Stoychev
                </Link>
            </div>
            <div className={styles.paragraphFooter}>
                <Link className={styles.footerImageLink} title='Instagram'><img src='../images/instagram-logo.png' alt='instagram' className={styles.imageFooter} /></Link>
                <Link className={styles.footerImageLink} title='Facebook' to="https://www.facebook.com/nasko.stoychev.1/" target="_blank" rel="noopener noreferrer">
                    <img src='../images/facebook.png' alt='facebook' className={styles.imageFooter} />
                </Link>
                <Link className={styles.footerImageLink} title='GitHub' to="https://github.com/AStoychev" target="_blank" rel="noopener noreferrer">
                    <img src='../images/github.png' alt='twitter' className={styles.imageGithubFooter} />
                </Link>
                <Link className={styles.footerImageLink} title='Mail' to="mailto:stoychev.nas@gmail.com"><img src='../images/mail.png' alt='mail' className={styles.imageFooter} /></Link>
                <Link className={styles.footerImageLink} title='Phone'><img src='../images/apple.png' alt='phone' className={styles.imageFooter} /></Link>
            </div>
        </div>
    );
}