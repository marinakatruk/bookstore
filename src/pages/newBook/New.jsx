import React from 'react'
import { Header } from '../../components/header/header'
import { BookForm } from '../../components/bookForm/bookForm'

import styles from './new.module.scss'

export const New = ({ handleSubmit, counter }) => {
    return (
        <div className={styles.container}>
            <Header counter={counter}/>
            <div className={styles.main}>
                <h2>Enter the data</h2>
                <BookForm handleSubmit={handleSubmit}/>
            </div>
        </div>
    )
}