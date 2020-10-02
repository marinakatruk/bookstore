import React, { useState, useEffect } from 'react'
import { Book } from '../book/book'
import books from '../book/books'

import styles from './catalog.module.scss'

export const Catalog = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const result = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) :
        books;

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
            />          
        )
    })


    return (
        <div className={styles.catalog}>
            {bookComponents}
        </div>
  
    )
}