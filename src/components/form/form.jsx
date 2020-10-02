import React from 'react'

import styles from './form.module.scss'

export const Form = () => {

    return (
        <form>
            <div className={styles.form}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Search..."

                />
            </div>
        </form>
    )
}