
import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';


import Menu from './svg/menu.svg';
import Close from './svg/xmark-solid.svg';
import CartIcon from './svg/cart-shopping-solid.svg';
import { AppContext } from './AppContext';

import './scss/_Header.scss';



const Header = () => {
    const {cart} = useContext(AppContext);
    
    const [toggle, setToggle] = useState(false);

    const menuToggleBtn = () => setToggle(!toggle);

    return ( 
       <header>
            <div className="menu" onClick={menuToggleBtn}>
                <img src={Menu} alt="menu icon" width="20"/>
            </div>
            <div className="logo">
                <h1><NavLink to="/">Shop</NavLink></h1>
            </div>
            <nav>
                <ul className={toggle ? "toggle" : ""}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/product">Product</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/login">Login / Register</NavLink></li>
                    <li className='close' onClick={menuToggleBtn}>
                        <img src={Close} alt="close icon" width="20" /></li>
                </ul>
                <div className="nav-cart">
                    <span>{cart.length}</span>
                    <NavLink to="/cart">
                    <img src={CartIcon} alt="cart icon" width="20" />
                    </NavLink>
                </div>
            </nav>
       </header>
        );
}
 
export default Header;