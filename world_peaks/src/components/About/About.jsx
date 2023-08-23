import { Link } from "react-router-dom";

import styles from "./About.module.css"

export const About = () => {
    return (
        <div>
            <section className={styles.aboutSection}>
                <div className="container  ">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>Welcome to <span className={styles.titleSpan}>WorldPeak</span></h2>
                                </div>
                                <p>
                                    I created WorldPeaks with the main idea of applying my React skills.
                                    I use information in the form of JSON. As it is possible that the
                                    information does not correspond with the real data for the peaks.
                                    If you find the wrong information on the site to the actual peak, 
                                    please feel free to contact me through some of the ways listed below.
                                </p>

                                <div className={styles.contactLinkDiv}>
                                    <Link className={styles.contactLink} title='Facebook' to="https://www.facebook.com/nasko.stoychev.1/" target="_blank" rel="noopener noreferrer">
                                        <img src='../images/facebook.png' alt='facebook' className={styles.imageFooter} />
                                    </Link>
                                    <Link className={styles.contactLink} title='GitHub' to="https://github.com/AStoychev" target="_blank" rel="noopener noreferrer">
                                        <img src='../images/github.png' alt='twitter' className={styles.imageGithubFooter} />
                                    </Link>
                                    <Link className={styles.contactLink} title='Mail' to="mailto:stoychev.nas@gmail.com"><img src='../images/mail.png' alt='mail' className={styles.imageFooter} /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="img-box">
                                <img src="images/about.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
