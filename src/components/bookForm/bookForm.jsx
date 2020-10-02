import React from 'react'
import { useState, useEffect } from 'react'

import styles from './bookForm.module.scss'

export const BookForm = () => {
    const [book, setBook] = useState({
        name: '',
        autor: '',
        year: '',
        price: '',
        image: ''
    });



    return (
        <form 
            className={styles.container}
            >
            <label className={styles.item}>
                Name of the book: 
                <input className={styles.input} type="text" name="name" value={book.name} />
            </label>
            <label className={styles.item}>
                Autor: 
                <input className={styles.input} type="text" name="autor" value={book.autor} />
            </label>
            <label className={styles.item}>
                Release year: 
                <input className={styles.input} type="text" name="year" value={book.year} />
            </label>
            <label className={styles.item}>
                Price:
                <input className={styles.input} type="text" name="price" value={book.price} />
            </label>
            <label className={styles.item}>
                Add an image:
                <input className={styles.input} type="text" name="image" value={book.image} />
            </label>
            <input className={styles.submit} type="submit" value="Create a book" />
        </form>
    )
}