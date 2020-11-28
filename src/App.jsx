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

import { useState, useEffect } from 'react'

import styles from './App.module.scss'

function App() {
  // отображается в каталоге
  const [data, setData] = useState([]);
  // сюда добавляет пользователь, отправляется в storage и затем отображается
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [counter, setCounter] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);
  const [term, setTerm] = useState('');

  const initialData = reserveBooks;

  const updateData = (obj) => {
    if (obj.term.length === 0) {
      setData(initialData);
      setTerm(obj.term);
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
      if (currentItem.name !== item.name) {
        return currentItem;
      } else {
        return null;
      }
    });
    console.log(newItems);
    setCartItems(newItems);
    setCounter(counter - 1);
    setCartAmount(cartAmount - bookPrice);

  }

  useEffect(() => {
    let result;
    const data = JSON.parse(localStorage.getItem('books'));
    if (data && data.length > 0) {
      result = data;
    } else {
      result = reserveBooks;
    }
    setData(result);
}, []);

  
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  });


  return (
    <Router>
      <div className={styles.container}>
        <Logo/>
        <Switch>
          <Route exact path={'/'}>
            <Home data={data}
              AddItemToCart={AddItemToCart}
              counter={counter}
              books={books}
              term={term}
              updateData={updateData}
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
