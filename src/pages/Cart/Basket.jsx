import React from 'react'
import { Header } from '../../components/header/header'

import styles from './cart.module.scss'

export const Basket = () => {
    
    return (
        <div>
            <Header/>
            <div className={styles.main}>Cart Page</div>
        </div>
    )
}