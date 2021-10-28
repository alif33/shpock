import React, { useState } from 'react';
import {  Button } from 'reactstrap';
import ModalRight from '../../../component/ModalRight';
import Location from './LocationMobile/Location';
import Price from '../Price';
import DateListed from '../DateListed';
import Shorts from '../Shorts';
import Category from '../../../component/Category';

const FilterMobile = () => {
    const [price, setPrice] = useState(false);
  const [date, setDate] = useState(false);
  const [shorts, setShorts] = useState(false);
  const [category, setCategory] = useState(false);
  return (
    <div className='filter-btn mobile-responsive'>
      <ul>
        <li>
          <Location />
        </li>
        <li className='position-relative'>
          <Button onClick={() => setPrice(!price)}>
            price
            <svg
              viewBox='0 0 16 16'
              class='SVG__IconSVG-sc-741qml-0 jmSzln'
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
          <ModalRight modal={price} setModal={setPrice}>
            <Price price={price} setPrice={setPrice} />
          </ModalRight>
        </li>
        <li className='position-relative'>
          <Button onClick={() => setDate(!date)}>
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
          <ModalRight modal={date} setModal={setDate}>
            <DateListed date={date} />
          </ModalRight>
        </li>
        <li className='position-relative'>
          <Button onClick={() => setShorts(!shorts)}>
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
          <ModalRight modal={shorts} setModal={setShorts}t>
            <Shorts shorts={shorts} />
          </ModalRight>
        </li>
        <li className='position-relative'>
          <Button onClick={() => setCategory(!category)}>
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
          <ModalRight modal={category} setModal={setCategory}>
            <Category category={category} />
          </ModalRight>
        </li>
        <li>
          <Button className='clear-btn'>Clear all</Button>
        </li>
      </ul>
    </div>
  )
}

export default FilterMobile
