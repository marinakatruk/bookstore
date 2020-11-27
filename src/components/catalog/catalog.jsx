import React, { useState, useEffect } from 'react'
import { Book } from '../book/book'
import books from '../book/books'

import styles from './catalog.module.scss'

export const Catalog = ({ AddItemToCart }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        let result;
        const data = JSON.parse(localStorage.getItem('books'));
        if (data && data.length > 0) {
            result = data;
        } else {
            result = books;
        }

        setData(result);
    }, []);

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