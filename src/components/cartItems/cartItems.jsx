import React from 'react'
import { CartItem } from '../CartItem/CartItem'
import { useSelector } from 'react-redux'

import styles from './CartItems.module.scss'

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