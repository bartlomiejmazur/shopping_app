import React from 'react';

import Products from './section/Products';
import Details from './section/Details';
import { Route, Routes } from 'react-router-dom';


const Section = () => {
    return ( 
        <section>
        <Routes>
            <Route  path="/product" element={<Products/>} />
            <Route exact path="/product/:id" element={<Details/>} />
        </Routes>
        </section>
         );
}
 
export default Section;
