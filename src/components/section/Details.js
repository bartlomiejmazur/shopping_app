import React, { useEffect, useContext, useState, useCallback } from 'react';
import { useParams, NavLink } from 'react-router-dom';

import { AppContext } from '../AppContext';
import Colors from './Colors';

import '../scss/_Details.scss';

const Details = () => {
  const [product, setProduct] = useState([]);
  const { products, addCart } = useContext(AppContext);
  const { id } = useParams();

  const getProduct = useCallback(() => {
    if (id) {
      const res = products;
      const data = res.filter((item) => {
        return item.id === id;
      });
      setProduct(data);
    }
  }, [products, id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <>
      {product.map((item) => (
        <div className="details" key={item.id}>
          <img src={item.src} alt="img" />
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>
            <Colors colors={item.colors} />
            <p>{item.description}</p>
            <p>{item.content}</p>
            <NavLink
              to="/cart"
              className="cart"
              onClick={() => addCart(item.id)}
            >
              Add to cart
            </NavLink>
          </div>
        </div>
      ))}
    </>
  );
};

export default Details;
