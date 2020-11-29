import React, { useEffect } from 'react'
import { Book } from '../book/book'
import reserveBooks from '../book/books'

import styles from './catalog.module.scss'

export const Catalog = ({ data, updateData, AddItemToCart }) => {

    useEffect(() => {
        let result;
        const storedData = JSON.parse(localStorage.getItem('books'));
        if (storedData) {
          result = storedData;
        } else {
          result = reserveBooks;
        }
        updateData(result);
    }, [updateData]);


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