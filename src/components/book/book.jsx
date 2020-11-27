import React from 'react'
import { Button } from '../button/button'

import styles from './book.module.scss'


export const Book = ({ name, autor, year, price, image, AddItemToCart }) => {

    const handleClick = () => {
        let item = {};
        item.name = name;
        item.autor = autor;
        item.year = year;
        item.price = price;
        item.image = image;

        AddItemToCart(item);
        
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.imageBlock}>
                <img className={styles.image} src={process.env.PUBLIC_URL + image} alt={name}></img>
            </div>
            <div className={styles.infoBlock}>
                <h3>{name}</h3>
                <h4>{autor}</h4>
                <p>Release year: <span>{year}</span></p>
            </div>
            <div className={styles.priceBlock}>
                <h5>${price}</h5>
                <Button text="Buy" className={styles.but} onClick={handleClick}/>
            </div>
            
        </div>
    )
}