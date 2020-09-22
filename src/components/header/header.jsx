import React from 'react'
import { Link } from 'react-router-dom'

import styles from './header.module.scss'

export const Header = () => {

    const classes = styles.menuItem + ' ' + styles.active;
    
    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <li className={classes}>
                    <Link to= '/' className={styles.link}>Home</Link>
                </li>
                <li className={styles.menuItem}>Form</li>
                <li className={styles.menuItem}>
                    <Link to='/cart' className={styles.link}>
                        <div className={styles.cartIcon}></div>
                        <span className={styles.counter}>1</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

