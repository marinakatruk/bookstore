import React from 'react'

import styles from './cartItem.module.scss'

export const CartItem = ({ name, autor, year, price, image }) => {

    return (
        <div className={styles.container}>
            <div className={styles.book}>
                <img className={styles.image} src={process.env.PUBLIC_URL + image} alt={name}></img>
                <div className={styles.info}>
                    <h3>{name}</h3>
                    <h4>{autor}</h4>
                    <p>Release year: <span>{year}</span></p>
                </div>    
            </div>
            <div className={styles.priceBlock}>
                <h5>${price}</h5>
                <span>1</span>
            </div>
            <div className={styles.deleteBlock}>
                <button type='button' className={styles.button}>X</button>
            </div>
        </div>
    )

}