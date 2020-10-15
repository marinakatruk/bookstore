import React from 'react'
import { useState, useEffect } from 'react'

import styles from './bookForm.module.scss'

export const BookForm = () => {
    const [books, setBooks] = useState([]);

    const [name, setName] = useState("");
    const [autor, setAutor] = useState("");
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const createBook = (n, a, y, p, i) => {
        const obj = {};
        obj.name = n;
        obj.autor = a;
        obj.year = y;
        obj.price = p;
        obj.image = i;
        return obj;
    }

    const addBook = (object) => {
        const newBooks = [...books, { object }];
        setBooks(newBooks);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBook = createBook(name, autor, year, price, image);
        addBook(newBook);
        setName("");
        setAutor("");
        setYear("");
        setPrice("");
        setImage("");
    }

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    });
       

    return (
        <form 
            className={styles.container}
            onSubmit={handleSubmit}
            >
            <label className={styles.item}>
                Name of the book: 
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </label>
            <label className={styles.item}>
                Autor: 
                <input
                    className={styles.input}
                    type="text"
                    name="autor"
                    value={autor} 
                    onChange={event => setAutor(event.target.value)}
                />
            </label>
            <label className={styles.item}>
                Release year: 
                <input
                    className={styles.input}
                    type="text"
                    name="year"
                    value={year}
                    onChange={event => setYear(event.target.value)} 
                />
            </label>
            <label className={styles.item}>
                Price:
                <input
                    className={styles.input}
                    type="text"
                    name="price"
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                />
            </label>
            <label className={styles.item}>
                Add an image:
                <input
                    className={styles.input}
                    type="text"
                    name="image"
                    value={image}
                    onChange={event => setImage(event.target.value)}
                />
            </label>
            <input className={styles.submit} type="submit" value="Create a book"/>
        </form>
    )
}