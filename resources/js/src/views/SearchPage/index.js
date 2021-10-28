import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Button } from 'reactstrap';
import Location from '../../component/Location/Location';
import ProductNotFound from '../../component/ProductNotFound';
import Price from './Price';
import DateListed from './DateListed';
import Shorts from './Shorts';
import Category from '../../component/Category';
import FilterMobile from './FilterMobile/FilterMobile';
const SearchPage = () => {
  const [Click, setClick] = useState(false);
  const [price, setPrice] = useState(false);
  const [date, setDate] = useState(false);
  const [shorts, setShorts] = useState(false);
  const [category, setCategory] = useState(false);
  const prices = () => {
    setPrice(!price);
    setDate(false);
    setShorts(false);
    setCategory(false);
  };
  const dates = () => {
    setPrice(false);
    setDate(!date);
    setShorts(false);
    setCategory(false);
  };
    const shortss = () => {
    setPrice(false);
    setDate(false);
    setShorts(!shorts);
    setCategory(false);
  };
    const categorys = () => {
    setPrice(false);
    setDate(false);
    setShorts(false);
    setCategory(!category);
  };

  return (
    <div className='search-page'>
      <Container>
        <Row>
          <Col sm={12} className='bread-cramb'>
            <h6>
              <Link to='/'>Home ></Link>
            </h6>
            <h1>Ads in Fashion & Accessories</h1>
            <p>
              Buy & sell second hand fashion & accessories across the UK.
              Discover beautiful luxury designer brands, clothes, shoes, boots,
              jackets, pants and much more - for sale up to 90 % off.
            </p>
          </Col>
          <Col md={12}>
            <div className='filter-btn'>
              <ul>
                <li>
                  <Location />
                </li>
                <li className='position-relative'>
                  <Button onClick={() => prices()}>
                    price
                    <svg
                      viewBox='0 0 16 16'
                      class='SVG__IconSVG-sc-741qml-0 jmSzln'
                      className={`${price && 'clicked'}`}
                    >
                      <path
                        d='M2 5l6 6 6-6'
                        stroke='currentColor'
                        fill='none'
                        fill-rule='evenodd'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  </Button>
                  <Price price={price} setPrice={setPrice} />
                </li>
                <li className='position-relative'>
                  <Button onClick={() => dates()}>
                    Date Listed
                    <svg
                      viewBox='0 0 16 16'
                      class='SVG__IconSVG-sc-741qml-0 jmSzln'
                      className={`${date && 'clicked'}`}
                    >
                      <path
                        d='M2 5l6 6 6-6'
                        stroke='currentColor'
                        fill='none'
                        fill-rule='evenodd'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  </Button>
                  <DateListed date={date} />
                </li>
                <li className='position-relative'>
                  <Button onClick={() => shortss()}>
                    Short
                    <svg
                      viewBox='0 0 16 16'
                      class='SVG__IconSVG-sc-741qml-0 jmSzln'
                      className={`${shorts && 'clicked'}`}
                    >
                      <path
                        d='M2 5l6 6 6-6'
                        stroke='currentColor'
                        fill='none'
                        fill-rule='evenodd'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  </Button>
                  <Shorts shorts={shorts} />
                </li>
                <li className='position-relative'>
                  <Button onClick={() => categorys()}>
                    Category
                    <svg
                      viewBox='0 0 16 16'
                      class='SVG__IconSVG-sc-741qml-0 jmSzln'
                      className={`${category && 'clicked'}`}
                    >
                      <path
                        d='M2 5l6 6 6-6'
                        stroke='currentColor'
                        fill='none'
                        fill-rule='evenodd'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  </Button>
                  <Category category={category} />
                </li>
                <li>
                  <Button className='clear-btn'>Clear all</Button>
                </li>
              </ul>
            </div>
            <FilterMobile />
          </Col>
          <ProductNotFound />
        </Row>
      </Container>
    </div>
  );
};

export default SearchPage;
