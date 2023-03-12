import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { AppContext } from '../AppContext';

import Colors from './Colors';
import '../scss/_Cart.scss';

const Cart = () => {
  const { cart, reduction, increase, removeProduct, total, getTotal } =
    useContext(AppContext);

  useEffect(() => {
    getTotal();
  }, [getTotal]);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>Nothings Product</h2>;
  } else {
    return (
      <>
        {cart.map((item) => (
          <div className="details cart" key={item.id}>
            <img src={item.src} alt="img" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price * item.count}</span>
              </div>
              <Colors colors={item.colors} />
              <p>{item.description}</p>
              <p>{item.content}</p>
              <div className="amount">
                <button className="count" onClick={() => reduction(item.id)}>
                  {' '}
                  -{' '}
                </button>
                <span>{item.count}</span>
                <button className="count" onClick={() => increase(item.id)}>
                  {' '}
                  +{' '}
                </button>
              </div>
            </div>
            <div className="delete" onClick={() => removeProduct(item.id)}>
              X
            </div>
          </div>
        ))}
        <div className="total">
          <NavLink to="/payment">Payment</NavLink>
          <h3>Total: $ {total}</h3>
        </div>
      </>
    );
  }
};

export default Cart;
