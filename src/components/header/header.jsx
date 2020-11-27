import React from 'react'
import { NavLink } from 'react-router-dom'
import { Form } from '../form/form'


import styles from './header.module.scss'

export const Header = ({ counter }) => {
    
    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <NavLink to= '/' className={styles.link} activeClassName={styles.active} exact>Home</NavLink>
                </li>
                <li>
                    <Form/>
                </li>
                <li className={styles.menuItem}>
                    <NavLink to='/cart' className={styles.link} activeClassName={styles.active}>
                        <div className={styles.cartIcon}></div>
                        <span className={styles.counter}>{counter}</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

