import React from 'react'

import styles from './button.module.scss'

export const Button = (props) => {
     return (
        <button className={styles.button}>{props.text}</button>
     )
}