import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Cart from './section/Cart';
import Details from './section/Details';
import Products from './section/Products';




const Section = () => {
    return ( 
        <section>
        <Routes>
            <Route  path="/product" element={<Products/>} />
            <Route exact path="/product/:id" element={<Details/>} />
            <Route  path="/cart" element={<Cart/>} />
        </Routes>
        </section>
         );
}
 
export default Section;
