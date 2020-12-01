import React from 'react'
import { Header } from '../../components/header/header'
import { CartItems } from '../../components/cartItems/cartItems'

import styles from './cart.module.scss'

export const Cart = ({ cartItems, counter, cartAmount, deleteItemFromCart }) => {
    
    return (
        <div className={styles.container}>
            <Header counter={counter}/>
            <div className={styles.main}>
                <h2 className={styles.title}>Your cart</h2>
                {cartItems.length > 0 ? <CartItems items={cartItems} deleteItemFromCart={deleteItemFromCart}/>
                : <div>nothing has been added yet</div>}
                <div className={styles.total} style={{display: cartItems.length > 0 ? 'flex' : 'none'}}>
                    <h1>TOTAL</h1>
                    <p>Books: <span>{counter}</span></p>
                    <p>Amount: <span className={styles.amount}>${cartAmount}</span></p>
                </div>
                
            </div>
        </div>
    )
}