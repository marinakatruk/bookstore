import React from 'react'
import { Button } from '../button/button'

import styles from './book.module.scss'


export const Book = (props) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.imageBlock}>
                <img className={styles.image} src={process.env.PUBLIC_URL + props.image} alt={props.name}></img>
            </div>
            <div className={styles.infoBlock}>
                <h3>{props.name}</h3>
                <h4>{props.autor}</h4>
                <p>Release year: <span>{props.year}</span></p>
            </div>
            <div className={styles.priceBlock}>
                <h5>{props.price}$</h5>
                <Button text="Buy" className={styles.but}/>
            </div>
            
        </div>
    )
}