import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Cart from './section/Cart';
import Details from './section/Details';
import Products from './section/Products';
import Payment from './section/Payment';
import About from './screens/About';
import Contact from './screens/Contact';
import Login from './screens/Login';
import Home from './screens/Home';
import Error from './screens/Error';

const Section = () => {
  return (
    <section>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shopping_app" element={<Products />} />
        <Route path="*" element={<Error />} />
        <Route path="/product" element={<Products />} />
        <Route exact path="/product/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </section>
  );
};

export default Section;
