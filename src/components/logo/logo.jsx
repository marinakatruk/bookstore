import React from 'react'
import styles from './logo.module.scss'

export const Logo = () => {
    return (
        <div className={styles.header}>
            <div className={styles.dash}></div>
            <h1 className={styles.mainTitle}>
                BookStore
            </h1>
            <h3 className={styles.title}>
                Choose your favourite book
            </h3>
            <div className={styles.dash}></div>
        </div>
    )
}