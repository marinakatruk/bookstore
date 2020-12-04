import React from 'react'
import styles from './Logo.module.scss'
import { NavLink } from 'react-router-dom'

export const Logo = () => {
    return (
        <div className={styles.header}>
            <div className={styles.dash}></div>
            <NavLink to= '/' exact className={styles.link}>
                <h1 className={styles.mainTitle}>
                    BookStore
                </h1>
            </NavLink>
            <h3 className={styles.title}>
                Choose your favourite book
            </h3>
            <div className={styles.dash}></div>
        </div>
    )
}