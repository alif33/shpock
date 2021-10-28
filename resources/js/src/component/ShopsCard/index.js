import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const ShopCard = (props) => {
  const { image, profileImg, title, items } = props;
  return (
    <Card className='shop-card'>
      <CardImg top width='100%' src={image} alt='Card image cap' />
      <CardBody className='d-flex p-1 pt-3 px-2 pb-1'>
        <div className='profile-image'>
          <img src={profileImg} alt='' />
        </div>
        <div>
          <CardTitle tag='h5'>{title}</CardTitle>
          <p>{items} items</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default ShopCard;
