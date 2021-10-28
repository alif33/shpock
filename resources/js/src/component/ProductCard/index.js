import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const ProductCard = (props) => {
  const { image, title, description, price } = props;
  return (
    <Card className='product-card'>
      <div className='card-img'>
        <CardImg top width='100%' src={image} alt='Card image cap' />
      </div>
      <CardBody className='pb-5'>
        <CardTitle tag='h5'>{title}</CardTitle>
        <h6>{price}</h6>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
