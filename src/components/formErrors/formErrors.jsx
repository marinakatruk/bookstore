import React from 'react'
import styles from './formErrors.module.scss'

export const FormErrors = ({ formErrors }) => {

    return (
    <div className={styles.error}>
        {Object.keys(formErrors).map((fieldName, i) => {
            
            if (formErrors[fieldName].length > 0) {
                return (
                    <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>
    )
}
