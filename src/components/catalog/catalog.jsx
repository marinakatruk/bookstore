import React from 'react'
import { Book } from '../book/book'

import styles from './catalog.module.scss'

export const Catalog = ({ data, AddItemToCart }) => {


    const bookComponents = data.map(book => {
        return (
            <Book key={book.name}
                name={book.name}
                autor={book.autor}
                year={book.year}
                price={book.price}
                image={book.image}
                AddItemToCart={AddItemToCart}
            />          
        )
    })


    return (
        <div className={styles.catalog}>
            {bookComponents}
        </div>
  
    )
}