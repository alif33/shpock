import React from 'react';
import { Link } from 'react-router-dom';

const index = ({ icon, title }) => {
  return (
    <Link to='#' className='category-items'>
      <div>{icon}</div>
      <h6 className='title'>{title}</h6>
    </Link>
  );
};

export default index;
