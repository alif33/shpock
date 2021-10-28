import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import InterestedItem from './InterestedItems';
import QandAns from './QandAns';
import Sidebar from './Sidebar';

const ProductSignle = () => {
  return (
    <div className='product-single'>
      <Container>
        <Row>
          <Col sm={12} className='bread-cramb'>
            <h6>
              <Link to='/'>Home ></Link>
            </h6>
          </Col>
          <Col md={6}>
            <div className='img-wrapper'>
              <img
                src='	https://webimg.secondhandapp.at/w-i-mgl/611249f08edb656a5fe31802'
                alt=''
                className='img-fluid'
              />
            </div>


          </Col>
          <Col md={6}>
            <Sidebar />
          </Col>
          <Col md={6}>
            <div className='product-details'>
              <div>
                <h6>Item Details</h6>
                <p>
                  Condition:<strong>New</strong>
                </p>
              </div>
              <h6>Description</h6>
              <p>
                ASQ AdjustableAn innovation in the CB segment, adjustable
                automatic squelch (ASQ), offers maximum comfort even for the
                most demanding users of CB car radio stations. If until now we
                were used to activating / deactivating the ASQ, now PNI brings
                its adjustment function, which allows to eliminate up to 100% of
                the interference, background noise and jamming in the CB
                band.ASQ button on microphoneFor ..
              </p>
            </div>
            <InterestedItem />
            <QandAns />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductSignle;
