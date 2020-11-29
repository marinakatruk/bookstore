import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './pages/home/Home.jsx'
import { Cart } from './pages/Cart/Cart'
import { New } from './pages/newBook/New.jsx'

import { Logo } from './components/logo/logo.jsx'
import { Footer } from './components/footer/footer.jsx'

import reserveBooks from './components/book/books'

import { useState, useEffect, useCallback } from 'react'

import styles from './App.module.scss'

function App() {
  // данные для отображения в каталоге
  const [data, setData] = useState([]);
  // книги, добавляемые пользователем
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [counter, setCounter] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);
  const [term, setTerm] = useState('');


  const updateData = useCallback(
    (array) => {
      setData(array);
    },
    [],
  );

  const filterData = (obj) => {
    if (obj.term.length === 0) {
      if(books.length > 0) {
        setData(books);
        setTerm(obj.term);
      } else {
        setData(reserveBooks);
        setTerm(obj.term);
      }
    } else {
      setData(obj.data);
      setTerm(obj.term);
    }
  };

  const handleSubmit = (book) => {
    setBooks([...books, book]);
  };

  const AddItemToCart = (item) => {
    const bookPrice = + item.price;
    setCartItems([...cartItems, item]);
    setCounter(counter + 1);
    setCartAmount(cartAmount + bookPrice);  
  }

  const DeleteItemFromCart = (item) => {
    const bookPrice = + item.price;
    const currentItems = cartItems;
    const newItems = currentItems.filter(currentItem => {
      return currentItem.name !== item.name;
    });
    console.log(newItems);
    setCartItems(newItems);
    setCounter(counter - 1);
    setCartAmount(cartAmount - bookPrice);

  }

  useEffect(() => {
    if (books.length >  0) {
      localStorage.setItem('books', JSON.stringify(books));
    }
  });


  return (
    <Router>
      <div className={styles.container}>
        <Logo/>
        <Switch>
          <Route exact path={'/'}>
            <Home 
              data={data}
              updateData={updateData}
              AddItemToCart={AddItemToCart}
              counter={counter}
              books={books}
              term={term}
              filterData={filterData}
            />
          </Route>
          <Route path={'/cart'}>
            <Cart cartItems={cartItems}
              counter={counter}
              cartAmount={cartAmount}
              DeleteItemFromCart={DeleteItemFromCart}
            />
          </Route>
          <Route path={'/new'}><New handleSubmit={handleSubmit} counter={counter}/></Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
