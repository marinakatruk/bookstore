import React from 'react'
import { CartItem } from '../cartItem/cartItem'
import { useSelector } from 'react-redux'

import styles from './cartItems.module.scss'

export const CartItems = () => {

    const items = useSelector(state => state.cartItems);

    const itemComponents = items.map((item, index) => {
        return (
            <CartItem key={index.toString() + item.name}
            id={item.id}
            name={item.name}
            autor={item.autor}
            year={item.year}
            price={item.price}
            image={item.image}
            />
        )
    })

    return (
        <div className={styles.items}>
            {itemComponents}
        </div>
    )
}