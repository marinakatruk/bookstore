import React from 'react'
import { CartItem } from '../cartItem/cartItem'

import styles from './cartItems.module.scss'

export const CartItems = ({ items, DeleteItemFromCart }) => {

    const itemComponents = items.map(item => {
        return (
            <CartItem key={item.name}
            name={item.name}
            autor={item.autor}
            year={item.year}
            price={item.price}
            image={item.image}
            DeleteItemFromCart={DeleteItemFromCart}
            />
        )
    })

    return (
        <div className={styles.items}>
            {itemComponents}
        </div>
    )
}