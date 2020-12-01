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

import { useState, useEffect, useCallback } from 'react'

import styles from './App.module.scss'

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [term, setTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [counter, setCounter] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);
  


  const updateData = useCallback(
    (array) => {
      setData(array);
    },
    [],
  );

  const filterData = (obj) => {
      setFilteredData(obj.data);
      setTerm(obj.term);
  };

  const handleSubmit = (book) => {
    setData([...data, book]);
  };

  const addItemToCart = (item) => {
    const bookPrice = + item.price;
    setCartItems([...cartItems, item]);
    setCounter(counter + 1);
    setCartAmount(cartAmount + bookPrice);  
  }

  const deleteItemFromCart = (item) => {
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
    if (data.length >  0) {
      localStorage.setItem('books', JSON.stringify(data));
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
              filteredData={filteredData}
              term={term}
              updateData={updateData}
              addItemToCart={addItemToCart}
              counter={counter}
              filterData={filterData}
            />
          </Route>
          <Route path={'/cart'}>
            <Cart cartItems={cartItems}
              counter={counter}
              cartAmount={cartAmount}
              deleteItemFromCart={deleteItemFromCart}
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
