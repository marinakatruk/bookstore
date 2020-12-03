import React from 'react'
import { Header } from '../../components/header/header'
import { CartItems } from '../../components/cartItems/cartItems'
import { useSelector } from 'react-redux'

import styles from './cart.module.scss'

export const Cart = () => {

    const counter = useSelector(state => state.counter);
    const cartItems = useSelector(state => state.cartItems);
    const cartAmount = useSelector(state => state.cartAmount);

    
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.main}>
                <h2 className={styles.title}>Your cart</h2>
                {cartItems.length > 0 ? <CartItems />
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