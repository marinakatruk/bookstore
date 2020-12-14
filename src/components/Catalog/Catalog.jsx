import React, { useEffect } from 'react'
import { Book } from '../Book/Book'
import reserveBooks from '../Book/books'
import { useSelector, useDispatch } from 'react-redux'
import { updateData } from '../../store/actions'

import styles from './Catalog.module.scss'

export const Catalog = ({ filteredData, term }) => {

    const data = useSelector(state => state.data);
    const dispatch = useDispatch();


    useEffect(() => {
        if (data.length === 0) {
            const currentBooks = reserveBooks;
            dispatch(updateData(currentBooks));
        }
    });

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