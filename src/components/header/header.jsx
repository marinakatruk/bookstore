import React from 'react'
import { NavLink } from 'react-router-dom'
import { SearchBar } from '../Search/Search'
import { useSelector } from 'react-redux'


import styles from './Header.module.scss'

export const Header = ({ data, term, filterData, isMainPage, isCart }) => {

    const counter = useSelector(state => state.counter)
    
    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <NavLink to= '/'
                        className={styles.link}
                        activeClassName={styles.active}
                        exact
                    >
                        {isMainPage ? 'Shop' : 'Back'}
                    </NavLink>
                </li>
                {isMainPage ? <li><SearchBar data={data} term={term} filterData={filterData}/></li> : ''}
                
                {isMainPage ? 
                    <li className={styles.menuItem}>
                        <NavLink to='/cart' className={styles.link} activeClassName={styles.active}>
                            <div className={styles.cartIcon}></div>
                            <span className={styles.counter}>{counter}</span>
                        </NavLink>
                    </li>
                : ''}
                
                {isCart ? 
                    <li className={styles.menuItem}>
                        <NavLink to='/cart' className={styles.link} activeClassName={styles.active}>
                            <div className={styles.cartIcon}></div>
                            <span className={styles.counter}>{counter}</span>
                        </NavLink>
                    </li>
                : ''}

            </ul>
        </div>
    )
}

