import React from 'react'
import { useState } from 'react'
import styles from './formErrors.module.scss'

export const FormErrors = ({ formErrors }) => {
    const [errorsCounter, setErrorsCounter] = useState(0);

    return (
    <div className={styles.error}>
        {Object.keys(formErrors).map((fieldName, i) => {
            
            if (formErrors[fieldName].length > 0 && errorsCounter === 0) {
                setErrorsCounter(1);
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
