import React from 'react';
import { Link } from 'react-router-dom';

const data = [
  {
    title: 'Motorolla Radio',
    path: '/search',
  },
  {
    title: ' Radio receivers',
    path: '/search',
  },
];
const InterestedItem = () => {
  return (
    <div className='interested'>
      <h6>You may be also interested in</h6>
      <div>
        {data &&
          data.map((items) => <Link to={items.path}>{items.title}</Link>)}
      </div>
    </div>
  );
};

export default InterestedItem;
