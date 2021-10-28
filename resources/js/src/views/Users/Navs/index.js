import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

const Tabs = () => {
  return (
    <Nav className='profile-nav mb-4'>
      <NavItem>
        <NavLink exact to='/users'>
          Items
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to='/users/reviews'>
          Reviews
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default Tabs;
