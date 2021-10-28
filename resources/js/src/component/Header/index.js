import React, { useState } from 'react';

import { Container, Col, Row, Nav, NavItem, Button } from 'reactstrap';
import Authentication from '../AuthenticationForm';
import { Link, NavLink } from 'react-router-dom';
import ModalRight from '../ModalRight';

import Search from '../Search';
const Header = () => {
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState(false);
  const modals1 = () => {
    setModal(!modal);
    setLogin(true);
  };
  const modals2 = () => {
    setModal(!modal);
    setLogin(false);
  };
  return (
    <header className=' header-bg sticky-top'>
      <Container>
        <Row className='align-items-center'>
          <Col className='d-flex align-items-center justify-content-between'>
            <div className=' d-flex align-items-center logo'>
              <Link to='/'>
                <img
                  src='https://web3cdn.secondhandapp.com/_next/static/logotype.f00f7050feb3d511bf44ea45366d7488.svg'
                  alt='logo'
                  height='38px'
                />
              </Link>
              {/* <p className='text-muted fw-bold ms-3'>SHPOCK</p> */}
              <Search />
            </div>
            <div className='d-flex'>
              <Nav className='align-items-center  d-flex sell-now'>
                <NavItem>
                  <NavLink
                    exact
                    className='nav-style  nav-link text-muted sell-now-link '
                    to='/sells'
                  >
                    <svg
                      viewBox='0 0 24 24'
                      class='SVG__IconSVG-sc-741qml-0 jmSzln'
                    >
                      <g fill='currentColor' fill-rule='evenodd'>
                        <path d='M6.347 7l.956-1.604c.329-.552.478-.73.673-.904.196-.174.413-.297.662-.376.25-.08.48-.116 1.122-.116h4.362c.655 0 .89.038 1.144.122.254.083.473.212.67.392.198.181.346.367.666.938L17.471 7h1.915c.909 0 1.238.095 1.57.272.333.178.594.439.772.771.177.333.272.662.272 1.571v7.772c0 .909-.095 1.238-.272 1.57a1.853 1.853 0 0 1-.771.772c-.333.177-.662.272-1.571.272H4.614c-.909 0-1.238-.095-1.57-.272a1.853 1.853 0 0 1-.772-.771C2.095 18.624 2 18.295 2 17.386V9.614c0-.909.095-1.238.272-1.57.178-.333.439-.594.771-.772C3.376 7.095 3.705 7 4.614 7h1.733zm5.608 9.276c1.982 0 3.586-1.592 3.586-3.552s-1.604-3.552-3.586-3.552c-1.982 0-3.586 1.592-3.586 3.552s1.604 3.552 3.586 3.552zm0 1c-2.533 0-4.586-2.038-4.586-4.552s2.053-4.552 4.586-4.552c2.533 0 4.586 2.038 4.586 4.552s-2.053 4.552-4.586 4.552zM3.402 6.304a.5.5 0 1 1 0-1h2.005a.5.5 0 1 1 0 1H3.402z'></path>
                      </g>
                    </svg>
                    Sell Now
                  </NavLink>
                </NavItem>
                <NavItem className='hearIcon'>
                  <NavLink
                    exact
                    className='nav-style  nav-link text-muted wishlist-link'
                    to='/Profile/watchlist'
                  >
                    <svg viewBox='0 0 24 24' class='SVG-wlnxuy-0 bIwcGB'>
                      <path
                        d='M2.471 12.356h.001l9.14 9.718a.497.497 0 0 0 .755.006l9.162-9.701.005-.006c2.268-2.407 2.29-6.356.05-8.794-2.217-2.41-5.809-2.437-8.055-.058l-1.56 1.652-1.583-1.675c-2.224-2.355-5.781-2.327-7.974.063l-.014.016C.172 6.02.205 9.957 2.47 12.356z'
                        stroke='#000'
                        stroke-width='1.5'
                        fill='none'
                        fill-rule='evenodd'
                      ></path>
                    </svg>
                  </NavLink>
                </NavItem>
                <NavItem className='SearchIcon'>
                  <NavLink
                    exact
                    className='nav-style  nav-link text-muted wishlist-link'
                    to='/search'
                  >
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.0625 18.6875C14.826 18.6875 18.6875 14.826 18.6875 10.0625C18.6875 5.29904 14.826 1.4375 10.0625 1.4375C5.29904 1.4375 1.4375 5.29904 1.4375 10.0625C1.4375 14.826 5.29904 18.6875 10.0625 18.6875Z" stroke="#7587A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M16.5312 16.5312L21.5625 21.5625" stroke="#7587A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </NavLink>
                </NavItem>
              </Nav>
              <ul className='button-groups d-flex align-items-center m-0 p-0'>

                <li className='signup'>
                  <Button onClick={() => modals1()}>Sign Up</Button>
                  <ModalRight modal={modal} setModal={setModal}>
                    <Authentication login={login} />
                  </ModalRight>
                </li>
                <li className='login'>
                  <Button onClick={() => modals2()}>Log In</Button>
                  {/* <ModalRight modal={modal} setModal={setModal}>
                    <Authentication login={false} />
                  </ModalRight> */}
                </li>
                {/* <li>
                  <Button>...</Button>
                </li> */}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
