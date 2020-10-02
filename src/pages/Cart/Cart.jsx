import React from 'react'
import { Header } from '../../components/header/header'

import styles from './cart.module.scss'

export const Cart = () => {
    
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.main}>Cart Page</div>
        </div>
    )
}