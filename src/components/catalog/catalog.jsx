import React, { useEffect } from 'react'
import { Book } from '../book/book'
import reserveBooks from '../book/books'

import styles from './catalog.module.scss'

export const Catalog = ({ data, filteredData, term, updateData, addItemToCart }) => {

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


    let bookComponents;
    if (term === '') {
        bookComponents = data.map(book => {
            return (
                <Book key={book.name}
                    name={book.name}
                    autor={book.autor}
                    year={book.year}
                    price={book.price}
                    image={book.image}
                    addItemToCart={addItemToCart}
                />          
            )
        })
    } else {
        bookComponents = filteredData.map(book => {
            return (
                <Book key={book.name}
                    name={book.name}
                    autor={book.autor}
                    year={book.year}
                    price={book.price}
                    image={book.image}
                    addItemToCart={addItemToCart}
                />          
            )
        })
    }

    return (
        <div className={styles.catalog}>
            {bookComponents}
        </div>
  
    )
}