import React from 'react'
import { Header } from '../../components/Header/Header'
import { BookForm } from '../../components/BookForm/BookForm'

import styles from './BookCreator.module.scss'

export const BookCreator = () => {
    return (
        <div className={styles.container}>
            <Header isMainPage={false}/>
            <div className={styles.main}>
                <h2>Enter the data</h2>
                <BookForm />
            </div>
        </div>
    )
}