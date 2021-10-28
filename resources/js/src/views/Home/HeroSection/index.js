import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

const index = () => {
  return (
    <Row>
      <Col>
        <div className='section-top'>
          <h1 className='title'>Sell & buy - easy & fast</h1>
          <p className='subtitle'>
            Check out our top selling items on the app:
          </p>
          <div className='categories'>
            <ul className='d-flex m-0 p-0 align-items-center'>
              <li>
                <Link to='/search'>Sofa</Link>
              </li>
              <li>
                <Link to='/search'>Nintendo</Link>
              </li>
              <li>
                <Link to='/search'>IphoneX</Link>
              </li>
              <li>
                <Link to='/search'>Chair</Link>
              </li>
              <li>
                <Link to='/search'>Bike</Link>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default index;
