import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
// import logo from '../../assets/img/main.png'
// import { a } from 'react-router-dom';

const Footer = () => {
  const data = [
    {
      id: 1,
      title: 'About us',
      navitem: [
        {
          id: 1,
          name: 'Our Story',
          path: '#',
        },
        {
          id: 2,
          name: 'Contact Us',
          path: '#',
        },
        {
          id: 3,
          name: 'ZASUWA Fabrics',
          path: '#',
        },
        {
          id: 4,
          name: 'Product Care',
          path: '#',
        },
      ],
    },
    {
      id: 2,
      title: 'CUSTOMER SERVICE',
      navitem: [
        {
          id: 1,
          name: 'Size Reference',
          path: '#',
        },
        {
          id: 2,
          name: 'Shipping',
          path: '#',
        },
        {
          id: 3,
          name: 'Returns & Exchanges',
          path: '#',
        },
        {
          id: 4,
          name: 'Customer Reviews',
          path: '#',
        },
      ],
    },
  ];
  return (
    <footer className='mt-6 py-5'>
      <Container>
        <Row>
          <Col xl={3} lg={3} md={6} sm={6}>
            <div className='app '>
              <h6>GET THE APP</h6>
            </div>
          </Col>
          {data &&
            data.map((items) => (
              <Col key={items.id} xl={3} lg={3} md={6} sm={6}>
                <ul className='list-unstyled lists'>
                  <li className='text-uppercase mb-3 title'>
                    <Link className='h6'>{items.title}</Link>
                  </li>
                  {items.navitem &&
                    items.navitem.map((item) => (
                      <li className='my-2 text-capitalize item' key={item.id}>
                        {item.path ? (
                          <Link to={item.path} className='align-items-center'>
                            {item.name}
                          </Link>
                        ) : (
                          <p>{item.name}</p>
                        )}
                      </li>
                    ))}
                </ul>
              </Col>
            ))}
          <Col xl={3} lg={3} md={6} sm={6} className='logo'>
            <button>
              English{' '}
              <svg viewBox='0 0 16 16' class='SVG__IconSVG-sc-741qml-0 jmSzln'>
                <path
                  d='M2 5l6 6 6-6'
                  stroke='currentColor'
                  fill='none'
                  fill-rule='evenodd'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </button>
            <div>
              <img
                src='https://web3cdn.secondhandapp.com/_next/static/logotype.f00f7050feb3d511bf44ea45366d7488.svg'
                alt='logo'
                height='38px'
              />
              <p>
                © finderly GmbH 2021

              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
