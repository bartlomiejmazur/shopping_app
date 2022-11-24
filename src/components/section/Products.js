import React, {useContext} from 'react';

import { NavLink } from 'react-router-dom';

import {AppContext} from '../AppContext'

import '../scss/_Products.scss';

const Products = () => {

    const {products, addCart} = useContext(AppContext);
    return ( 
        <div id='product'>
            {
                products.map(product => (
                    <div className="card" key={product.id}>
                        <NavLink to={`/product/${product.id}`}>
                            <img className='card-img' src={product.src} alt="img" />
                        </NavLink>
                        <div className="content">
                        <h3>
                            <NavLink to={`/product/${product.id}`}>{product.title}</NavLink>
                        </h3>
                        <span>${product.price}</span>
                        <p>${product.description}</p>
                        <button onClick={() => addCart(product.id)}>Add to card</button>
                        </div>
                    </div>
                ))
            }
        </div>
        );
}
 
export default Products;