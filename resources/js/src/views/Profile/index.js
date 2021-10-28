import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import Sidebar from './Sidebar';
import Messages from './Messages';
import Selling from './Selling';
import Buying from './Buying';
import Reviews from './Reviews';
import WatchLists from './watchLists';
import Navs from './Navs';
import Sidebar from './Sidebar';
const Routes = () => {
  return (
    <div className='pt-4 profile'>
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
              <Route exact path='/Profile' component={Messages} />
              <Route exact path='/Profile/selling' component={Selling} />
              <Route exact path='/Profile/buying' component={Buying} />
              <Route exact path='/Profile/watchlist' component={WatchLists} />
              <Route exact path='/Profile/reviews' component={Reviews} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Routes;
