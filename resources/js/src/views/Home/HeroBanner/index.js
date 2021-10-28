import React from 'react';

import { Button, Col, Row } from 'reactstrap';
import image1 from '../../../assets/img/heroimage.png';
const HeroBanner = () => {

  return (
    <Row className='hero-banner'>
      <Col>
        <div className='hero-item'>
          <h3 className='starting-text'>The</h3>
          <h1>99 Market</h1>
          <h3 className='everything'>Everything Under 99</h3>
          <Button className='buy-now'>Buy Now</Button>
          <div className='hero-image'>

            <img src={image1} alt="" />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default HeroBanner;
