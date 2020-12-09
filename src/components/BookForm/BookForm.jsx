import React from 'react'
import { useState } from 'react'
import { FormErrors } from '../FormErrors/FormErrors'
import { addData } from '../../store/actions'
import { useDispatch } from 'react-redux'

import styles from './BookForm.module.scss'

export const BookForm = () => {

    const [book, setBook] = useState({
        name: '',
        autor: '',
        year: '',
        price: '',
        image: ''
    });

    const [formValid, setFormValid] = useState({
        formErrors: { name: '', autor: '', year: '', price: '', image: '' },
        nameValid: false,
        autorValid: false,
        yearValid: false,
        priceValid: false,
        imageValid: false,
        isValid: false
    });

    const [fileStatus, setFileStatus] = useState('Select file...');
    const [filePreview, setFilePreview] = useState('');

    const handleChange = (event) => {
        let newBook;
        if (event.target.files === null) {
            const { name, value } = event.target;

            newBook = Object.assign({}, book);
            newBook[name] = value;
            validateField(name, value);
            setBook(newBook);
        } else {
            console.log(event.target.value);
            if (event.target.files.length > 0) {
                const imageFile = event.target.files[0];
                console.log(imageFile);
                const reader = new FileReader();
                reader.onloadend = function () {
                    handleFileError(reader.error);
                    const result = reader.result;
                    newBook = Object.assign({}, book);
                    newBook.image = result;
                    setFilePreview(result);
                    setBook(newBook);
                    setFileStatus(imageFile.name);
                }
                reader.readAsDataURL(imageFile);
                validateFileField(event.target.files);
                event.target.value = null;
            
            } else {
                validateFileField(event.target.files)
            }
  
        }
        
    };

    const validateFileField = (files) => {
        let fieldValidationErrors = formValid.formErrors;
        let imageValid = formValid.imageValid;

        imageValid = files.length > 0;
        fieldValidationErrors.image = imageValid ? '' : ' no file selected';

        let newFormValid = formValid;
        newFormValid.formErrors = fieldValidationErrors;
        newFormValid.imageValid = imageValid;

        setFormValid(newFormValid);

        validateForm();
        
    };

    const validateField = (fieldName, value) => {
        let fieldValidationErrors = formValid.formErrors;
        let nameValid = formValid.nameValid;
        let autorValid = formValid.autorValid;
        let yearValid = formValid.yearValid;
        let priceValid = formValid.yearValid;
        let imageValid = formValid.imageValid;
       
        let isValid = formValid.isValid;

        switch(fieldName) {
            case 'name':
                nameValid = value.length > 0;
                fieldValidationErrors.name = nameValid ? '' : ' cannot be blank';
                break;
            case 'autor':
                autorValid = value.length > 0;
                fieldValidationErrors.autor = autorValid ? '' : ' cannot be blank';
                break;
            case 'year':
                yearValid = value.length > 0 && value.match(/^\d+$/) !== null;
                fieldValidationErrors.year = yearValid ? '' : ' must contain only numbers';
                break;
            case 'price':
                priceValid = value.length > 0 && value.match(/^\d+$/) !== null;
                fieldValidationErrors.price = priceValid ? '' : ' must contain only numbers';
                break;
            default:
                break;
        }

        let newFormValid = formValid;

        newFormValid.formErrors = fieldValidationErrors;
        newFormValid.nameValid = nameValid;
        newFormValid.autorValid = autorValid;
        newFormValid.yearValid = yearValid;
        newFormValid.priceValid = priceValid;
        newFormValid.imageValid = imageValid;
        newFormValid.isValid = isValid;

        setFormValid(newFormValid);

        validateForm();
    }

    function validateForm() {
        const newFormValid = formValid;
        newFormValid.isValid = formValid.nameValid && formValid.autorValid && formValid.yearValid &&
        formValid.priceValid && formValid.imageValid;
        
        setFormValid(newFormValid);
    }

    const handleFileError = (error) => {
        let fieldValidationErrors = formValid.formErrors;
        let imageValid = formValid.imageValid;

        imageValid = !error;
        fieldValidationErrors.image = imageValid ? '' : ' file upload error';

        let newFormValid = Object.assign({}, formValid);
        newFormValid.formErrors = fieldValidationErrors;
        newFormValid.imageValid = imageValid;

        setFormValid(newFormValid);
        
    }

    const dispatch = useDispatch();

    const submitForm = () => {
        dispatch(addData(book));
        setBook({
            name: '',
            autor: '',
            year: '',
            price: '',
            image: ''
        })
        setFileStatus('Select file...');
        setFilePreview('');
    };

    const { formErrors, isValid } = formValid;

    const { container, item, input, submit, errors, fileInput, fileField, imageBox, preview } = styles;

    return (

        <form 
            className={container}
            >
            <div className={errors}>
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
                    value={book.name}
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
                    value={book.autor} 
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
                    value={book.year}
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
                    value={book.price}
                    onChange={handleChange}
                />
            </label>
            <label className={item}>
                Add an image:
                <input
                    className={fileInput}
                    style={{borderColor: formErrors.image.length === 0 ? '' : "red"}}
                    type="file"
                    accept="image/*"
                    name="image"
                    id="image"
                    onChange={handleChange}
                />
                <div className={fileField}>{fileStatus}</div>
            </label>
            {filePreview !== '' ?
            <div className={imageBox}>
                <img className={preview} src={filePreview} alt={fileStatus}></img>
            </div>
            : ''}
            <input className={submit} type="button" disabled={!isValid} value="Create a book" onClick={submitForm}/>
        </form>
    )
}