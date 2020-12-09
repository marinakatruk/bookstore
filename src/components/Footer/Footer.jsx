import React from 'react'

import styles from './Footer.module.scss'

export const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.text}>
                    Contact us 
                    <a className={styles.email} 
                        href="mailto:support@bookstore.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>support@bookstore.com</span>
                    </a>
                </p>
                <ul className={styles.socialList}>
                    <li className={styles.socialItem}>
                        <a href="https://twitter.com/jk_rowling" target="_blank" rel="noreferrer">
                            <div className={`${styles.socialIcon} ${styles.tw}`}></div>
                        </a>
                    </li>
                    <li className={styles.socialItem}>
                        <a href="https://www.facebook.com/groups/491485350932591" target="_blank" rel="noreferrer">
                            <div className={`${styles.socialIcon} ${styles.fb}`}></div>
                        </a>
                    </li>
                    <li className={styles.socialItem}>
                        <a href="https://www.instagram.com/books_obzor/" target="_blank" rel="noreferrer">
                            <div className={`${styles.socialIcon} ${styles.inst}`}></div>
                        </a>
                    </li>
                </ul>
                <p className={styles.text}>
                    <span>© 2020 Bookstore</span>
                </p>
            </div>
        </div>
    )
}