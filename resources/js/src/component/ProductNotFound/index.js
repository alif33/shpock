import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col } from 'reactstrap';

const index = () => {
  return (
    <Col className='product-not-found text-center mb-4' md={{size:6,offset:3}}>
      <div>
        <svg viewBox='0 0 250 250' class='SVG-wlnxuy-0 cnIZnY'>
          <g fill='none' fill-rule='evenodd'>
            <ellipse
              fill-opacity='.059'
              fill='#000'
              cx='123'
              cy='217'
              rx='60'
              ry='7'
            ></ellipse>
            <g transform='translate(39.35 46.809)'>
              <rect
                fill='#B6E8D0'
                x='23'
                width='121.542'
                height='142.791'
                rx='5'
              ></rect>
              <rect
                fill='#D9D9D9'
                fill-rule='nonzero'
                x='23'
                width='121.542'
                height='142.791'
                rx='5'
              ></rect>
              <ellipse
                fill='#414141'
                cx='70'
                cy='50.5'
                rx='13'
                ry='12.5'
              ></ellipse>
              <circle fill='#727272' cx='105.5' cy='54.5' r='6.5'></circle>
              <path
                d='M108.915 71.474c-8.415-1.442-13.157 1.432-15.852 7.324'
                stroke='#727272'
                stroke-width='3.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                d='M23 103.848h121.542v33.943a5 5 0 0 1-5 5H28a5 5 0 0 1-5-5v-33.943z'
                fill='#FFF'
                fill-rule='nonzero'
              ></path>
              <path
                d='M23 103.848h121.542v33.943a5 5 0 0 1-5 5H28a5 5 0 0 1-5-5v-33.943z'
                fill='#FFF'
                fill-rule='nonzero'
              ></path>
              <path
                d='M37.75 117.42h48.381M37.75 127.745h34.22'
                stroke='#D9D9D9'
                stroke-width='3.75'
                stroke-linecap='round'
              ></path>
              <path
                d='M23.011 5.624c0-5.258 2.814 37.524 8.441 128.346l106.758 8.82H28.01a5 5 0 0 1-5-5V5.623z'
                fill='#A6A6A6'
                fill-rule='nonzero'
                opacity='.195'
              ></path>
              <g
                transform='rotate(-15 121.255 12.32)'
                fill-rule='nonzero'
                stroke='#727272'
                stroke-width='7'
              >
                <ellipse
                  fill-opacity='.5'
                  fill='#FFF'
                  cx='51.634'
                  cy='33.327'
                  rx='32.4'
                  ry='32.586'
                ></ellipse>
                <path
                  d='M23.087 48.766L.155 62.043'
                  fill-opacity='.376'
                  fill='#D8D8D8'
                  stroke-linecap='round'
                ></path>
              </g>
            </g>
            <g opacity='.402' transform='translate(21 26)' stroke='#A6A6A6'>
              <path
                d='M202.63 24.163h4.475a.89.89 0 0 1 .895.884.89.89 0 0 1-.895.884h-4.475v4.512a.89.89 0 0 1-.895.884.89.89 0 0 1-.895-.884v-4.512h-4.475a.89.89 0 0 1-.895-.884c0-.488.4-.884.895-.884h4.475V19.68c0-.488.4-.884.895-.884a.89.89 0 0 1 .895.884v4.483z'
                stroke-width='1.178'
                fill='#A6A6A6'
                stroke-linecap='round'
              ></path>
              <ellipse
                stroke-width='2.356'
                opacity='.53'
                cx='166.904'
                cy='4.759'
                rx='3.759'
                ry='3.759'
              ></ellipse>
              <ellipse
                stroke-width='2.356'
                opacity='.401'
                cx='194.217'
                cy='67.667'
                rx='3.759'
                ry='3.759'
              ></ellipse>
              <path
                d='M42.244 5.367h4.475a.89.89 0 0 1 .895.884.89.89 0 0 1-.895.883h-4.475v4.513a.89.89 0 0 1-.895.884.89.89 0 0 1-.895-.884V7.134H35.98a.89.89 0 0 1-.895-.883c0-.488.401-.884.895-.884h4.475V.884c0-.488.401-.884.895-.884a.89.89 0 0 1 .895.884v4.483z'
                stroke-width='1.178'
                fill='#A6A6A6'
                opacity='.574'
                stroke-linecap='round'
              ></path>
              <path
                d='M13.425 74.287H17.9a.89.89 0 0 1 .895.883.89.89 0 0 1-.895.884h-4.475v4.513a.89.89 0 0 1-.895.884.89.89 0 0 1-.895-.884v-4.513H7.16a.89.89 0 0 1-.895-.884c0-.488.4-.883.895-.883h4.475v-4.484c0-.488.4-.883.895-.883a.89.89 0 0 1 .895.883v4.484z'
                stroke-width='1.178'
                fill='#A6A6A6'
                opacity='.289'
                stroke-linecap='round'
              ></path>
              <ellipse
                stroke-width='2.356'
                cx='3.759'
                cy='28.821'
                rx='3.759'
                ry='3.759'
              ></ellipse>
            </g>
          </g>
        </svg>
      </div>
      <h4>No results</h4>
      <h6>
        We weren't able to find what you're looking for at the moment. Try
        shopping by category or changing your search terms.
      </h6>
      <Link to='/'>Discover items near you</Link>
    </Col>
  );
};

export default index;
