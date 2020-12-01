import React from 'react'
import { CartItem } from '../cartItem/cartItem'

import styles from './cartItems.module.scss'

export const CartItems = ({ items, deleteItemFromCart }) => {

    const itemComponents = items.map(item => {
        return (
            <CartItem key={item.name}
            name={item.name}
            autor={item.autor}
            year={item.year}
            price={item.price}
            image={item.image}
            deleteItemFromCart={deleteItemFromCart}
            />
        )
    })

    return (
        <div className={styles.items}>
            {itemComponents}
        </div>
    )
}