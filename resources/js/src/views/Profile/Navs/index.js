import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

const Tabs = () => {
  return (
    <Nav className='profile-nav mb-4'>
      <NavItem>
        <NavLink exact to='/Profile'>
          Message
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to='/Profile/selling'>
          Selling
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to='/Profile/buying'>
          Buying
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to='/Profile/watchlist'>
          WatchList
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to='/Profile/reviews'>
          Reviews
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default Tabs;
