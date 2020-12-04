import React from 'react'
import { deleteItem, decrement, decreaseCartAmount } from '../../store/actions'
import { useDispatch } from 'react-redux'

import styles from './CartItem.module.scss'

export const CartItem = ({ id, name, autor, year, price, image }) => {

    const dispatch = useDispatch();

    const handleClick = (event) => {
        const bookId = event.target.id;
        console.log(event.target.value);
        const bookPrice = Number(event.target.value);
        console.log(bookId);
        console.log(bookPrice);

        dispatch(deleteItem(bookId));
        dispatch(decrement());
        dispatch(decreaseCartAmount(bookPrice));
    }

    return (
        <div className={styles.container}>
            <div className={styles.book}>
                <div className={styles.imageBox}>
                    <img className={styles.image} src={process.env.PUBLIC_URL + image} alt={name}></img>
                </div>
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
                <button type='button'
                    className={styles.button}
                    onClick={handleClick}
                    id={id}
                    value={price}
                >
                    X
                </button>
            </div>
        </div>
    )

}