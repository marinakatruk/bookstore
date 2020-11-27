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

import { useState, useEffect } from 'react'

import styles from './App.module.scss'

function App() {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [counter, setCounter] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);

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
    localStorage.setItem('books', JSON.stringify(books));
  });


  return (
    <Router>
      <div className={styles.container}>
        <Logo/>
        <Switch>
          <Route exact path={'/'}><Home AddItemToCart={AddItemToCart} counter={counter}/></Route>
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
