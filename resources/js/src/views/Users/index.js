import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Sidebar from './Sidebar';
import Navs from './Navs';
import Reviews from './Reviews';
import Items from './Items';
const Users = () => {
  return (
    <div className='pt-4 users'>
      <Container>
        <Row>
          <Col lg={4} md={12} sm={12}>
            <Sidebar />
          </Col>
          <Col lg={8} md={12} sm={12}>
            <Row>
              <Col md={12}>
                <Navs />
              </Col>
            </Row>
            <Switch>
              <Route exact path='/users' component={Items} />
              >
              <Route exact path='/users/reviews' component={Reviews} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Users;
