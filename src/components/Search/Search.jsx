import React from 'react'
import { useSelector } from 'react-redux'

import styles from './Search.module.scss'

export const SearchBar = ({ term, filterData }) => {

    const data = useSelector(state => state.data)

    const dataSearch = (event) => {
        const value = event.target.value.toLowerCase();
        const filteredData = data.filter(book => {
            return book.name.toLowerCase().includes(value);
        });

        filterData({
            data: filteredData,
            term: value
        });  
    }

    return (
        <form>
            <div className={styles.form}>
                <input
                    type="text"
                    value={term}
                    className={styles.input}
                    placeholder="Search..."
                    onChange={dataSearch}
                />
            </div>
        </form>
    )
}