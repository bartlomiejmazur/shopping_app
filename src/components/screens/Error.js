import React from 'react';

import { NavLink } from 'react-router-dom';
import { FaExclamationCircle } from 'react-icons/fa';

const Error = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        <FaExclamationCircle /> Sorry not found{' '}
        <NavLink to={'/product'}>Go back</NavLink>
      </h1>
    </div>
  );
};

export default Error;
