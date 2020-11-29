import React from 'react'

import styles from './search.module.scss'

export const SearchBar = ({ data, term, filterData }) => {

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