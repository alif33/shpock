import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';
import Seller from './Seller';
import Buyer from './Buyer';
const Reviews = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
      <Nav tabs className='tabs-content'>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            As Seller
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            As Buyer
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <Row>
            <Col sm='12'>
              <Seller />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='2'>
          <Row>
            <Col sm='12'>
              <Buyer />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Reviews;
