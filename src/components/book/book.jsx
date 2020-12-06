import React from 'react'
import { Button } from '../Button/Button'
import { addItem, increment, increaseCartAmount } from '../../store/actions'
import { useDispatch } from 'react-redux'

import styles from './Book.module.scss'


export const Book = ({ name, autor, year, price, image }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        let item = {};
        item.name = name;
        item.autor = autor;
        item.year = year;
        item.price = price;
        item.image = image;
        item.id = Math.floor(Math.random() * 10000).toString() + name;

        dispatch(addItem(item));
        dispatch(increment());
        dispatch(increaseCartAmount(Number(price)));
        
    }
    
    return (
        <div className={styles.container}>
           <div className={styles.book}>
                <img className={styles.image} src={image} alt={name}></img>
                <div className={styles.info}>
                    <h3>{name}</h3>
                    <h4>{autor}</h4>
                    <p>Release year: <span>{year}</span></p>
                </div>
            </div>
            <div className={styles.price}>
                <h5>${price}</h5>
                <Button text="Buy" className={styles.but} onClick={handleClick}/>
            </div>
            
        </div>
    )
}

// process.env.PUBLIC_URL + 