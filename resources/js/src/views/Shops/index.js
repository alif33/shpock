import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Container,
  Row,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';
import ShopCard from '../../component/ShopsCard';

const data = [
  {
    image: 'https://webimg.secondhandapp.at/w-i-m/6111b66e9d29ea10fda6234f',
    title: 'GGDelectronics and Communications LTD',
    profileImg:
      'https://webimg.secondhandapp.at/w-i-sxx/6111b36acd979358fd871e86',
    items: 45,
  },
  {
    image: 'https://webimg.secondhandapp.at/w-i-m/6111b66e9d29ea10fda6234f',
    title: 'GGDelectronics and Communications LTD',
    profileImg:
      'https://webimg.secondhandapp.at/w-i-sxx/6111b36acd979358fd871e86',
    items: 45,
  },
];
const Shops = () => {
  const [location, setLocation] = useState(false);
  return (
    <div className='shops-page'>
      <Container>
        <Row>
          <Col sm={12} className='bread-cramb mb-4'>
            <h6>
              <Link to='/'>Home ></Link>
            </h6>
            <h1>Ads in Fashion & Accessories</h1>
            <div className='search-location'>
              <p className='change-location'>
                Showing items near you{' '}
                {!location && (
                  <>
                    {' '}
                    (
                    <span onClick={() => setLocation(!location)}>
                      Change location
                    </span>
                    ){' '}
                  </>
                )}
              </p>
              {location && (
                <Form className='d-flex justify-content-between'>
                  <FormGroup>
                    <div className='d-flex align-items-center border bg-white search-wrapper'>
                      <Input
                        type='text'
                        name='text'
                        placeholder='Enter a Zip-Code or City border-0'
                      />
                      <svg
                        viewBox='0 0 24 24'
                        class='SVG__IconSVG-sc-741qml-0 jmSzln'
                        height='18'
                        width='18'
                      >
                        <path
                          d='M17.751 18.392l4.05 4.355a.752.752 0 0 1-.028 1.05.719.719 0 0 1-1.03-.029l-4.111-4.422a10.306 10.306 0 0 1-6.147 2.027C4.695 21.373 0 16.59 0 10.687S4.694 0 10.485 0c5.791 0 10.486 4.785 10.486 10.687 0 3.027-1.235 5.76-3.22 7.705zm-7.266 1.497c4.987 0 9.03-4.12 9.03-9.202 0-5.083-4.043-9.203-9.03-9.203-4.986 0-9.029 4.12-9.029 9.203 0 5.082 4.043 9.202 9.03 9.202z'
                          fill='currentColor'
                          fill-rule='nonzero'
                        ></path>
                      </svg>
                    </div>
                  </FormGroup>

                  <Button>Apply</Button>
                  <Button
                    className='cancel'
                    onClick={() => setLocation(!location)}
                  >
                    Cancel
                  </Button>
                </Form>
              )}
            </div>
          </Col>
          {data &&
            data.map((items, i) => (
              <Col md={4} lg={3} className='mb-2'>
                <Link to='/users' className='text-dark'>
                  <ShopCard {...items} />
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Shops;
