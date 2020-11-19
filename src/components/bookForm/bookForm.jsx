import React from 'react'
import { useState } from 'react'
import { FormErrors } from '../../components/formErrors/formErrors'

import styles from './bookForm.module.scss'

export const BookForm = (props) => {

    const [book, setBook] = useState({
        name: '',
        autor: '',
        year: '',
        price: '',
        image: ''
    });

    const [formValid, setFormValid] = useState({
        formErrors: {name: '', autor: '', year: '', price: '', image: ''},
        isValid: false
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        const newBook = Object.assign({}, book);
        newBook[name] = value;

        validateField(name, value);
        setBook(newBook);
    };

    const validateField = (fieldName, value) => {
        let fieldValidationErrors = formValid.formErrors;
        let isValid = formValid.isValid;
        
        isValid = value.length > 0;
        fieldValidationErrors[fieldName] = isValid ? '' : ' cannot be blank';

        setFormValid({formErrors: fieldValidationErrors, isValid: isValid})
    }

    const submitForm = () => {
        props.handleSubmit(book);
        setBook({
            name: '',
            autor: '',
            year: '',
            price: '',
            image: ''
        })
    };

    const { formErrors, isValid } = formValid;

    const { name, autor, year, price, image } = book;

    const { container, item, input, submit } = styles;

    return (

        <form 
            className={container}
            >
            <div>
                <FormErrors formErrors={formErrors}/>
            </div>
            <label className={item}>
                Name of the book: 
                <input
                    className={input}
                    style={{borderColor: formErrors.name.length === 0 ? '' : "red"}}
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <label className={item}>
                Autor: 
                <input
                    className={input}
                    style={{borderColor: formErrors.autor.length === 0 ? '' : "red"}}
                    type="text"
                    name="autor"
                    id="autor"
                    value={autor} 
                    onChange={handleChange}
                />
            </label>
            <label className={item}>
                Release year: 
                <input
                    className={input}
                    style={{borderColor: formErrors.year.length === 0 ? '' : "red"}}
                    type="text"
                    name="year"
                    id="year"
                    value={year}
                    onChange={handleChange} 
                />
            </label>
            <label className={item}>
                Price:
                <input
                    className={input}
                    style={{borderColor: formErrors.price.length === 0 ? '' : "red"}}
                    type="text"
                    name="price"
                    id="price"
                    value={price}
                    onChange={handleChange}
                />
            </label>
            <label className={item}>
                Add an image:
                <input
                    className={input}
                    style={{borderColor: formErrors.image.length === 0 ? '' : "red"}}
                    type="text"
                    name="image"
                    id="image"
                    value={image}
                    onChange={handleChange}
                />
            </label>
            <input className={submit} type="button" disabled={!isValid} value="Create a book" onClick={submitForm}/>
        </form>
    )
}