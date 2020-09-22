import React from 'react'

import styles from './footer.module.scss'

export const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.text}>Contact us <span>support@bookstore.com</span></p>
                <ul className={styles.socialList}>
                    <li className={styles.socialItem}>
                        <div className={`${styles.socialIcon} ${styles.tw}`}></div>
                    </li>
                    <li className={styles.socialItem}>
                        <div className={`${styles.socialIcon} ${styles.fb}`}></div>
                    </li>
                    <li className={styles.socialItem}>
                        <div className={`${styles.socialIcon} ${styles.inst}`}></div>
                    </li>
                </ul>
                <p className={styles.text}>
                    <span>© 2020 Bookstore</span>
                </p>
            </div>
        </div>
    )
}