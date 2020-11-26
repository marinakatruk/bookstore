import React, { useState } from 'react'
import { Header } from '../../components/header/header'
import { CartItems } from '../../components/cartItems/cartItems'

import { UseState } from 'react'

import styles from './cart.module.scss'

export const Cart = ({ cartItems }) => {

    // const [amount, setAmount] = useState(0);
    
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.main}>
                <h2 className={styles.title}>Your cart</h2>
                {cartItems.length > 0 ? <CartItems items={cartItems}/> : <div>nothing has been added yet</div>}
                <div className={styles.total}>
                    <h1>TOTAL</h1>
                    <p>Books: <span>1</span></p>
                    <p>Amount: <span className={styles.amount}>$23</span></p>
                </div>
                
            </div>
        </div>
    )
}