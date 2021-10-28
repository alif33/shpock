import React from 'react';
import { Link } from 'react-router-dom';

const Buyer = (props) => {
  const { data } = props;
  return (
    <div className='seller-content buyer-content'>
      {data ? (
        <div>data content here </div>
      ) : (
        <div className='text-center'>
          <svg viewBox='0 0 250 250' class='not-found'>
            <defs>
              <path
                d='M71.538 113.068L35.4 131.99a5 5 0 0 1-7.247-5.278l6.897-40.05L5.853 58.318a5 5 0 0 1 2.766-8.536l40.368-5.843L67.058 7.47a5 5 0 0 1 8.96 0L94.09 43.94l40.367 5.843a5 5 0 0 1 2.767 8.536l-29.197 28.345 6.897 40.05a5 5 0 0 1-7.247 5.278l-36.139-18.923z'
                id='a'
              ></path>
            </defs>
            <g fill='none' fill-rule='evenodd'>
              <ellipse
                fill-opacity='.059'
                fill='#000'
                cx='124.597'
                cy='213.773'
                rx='58'
                ry='7'
              ></ellipse>
              <g transform='translate(54.065 47)'>
                <mask id='b' fill='#fff'>
                  <use></use>
                </mask>
                <use fill='#CECECE' fill-rule='nonzero'></use>
                <path
                  d='M74.683 110.697L39.66 130.52a5 5 0 0 1-7.304-5.602L42.57 85.415 13.372 57.069a5 5 0 0 1 2.767-8.536l40.367-5.842C64.024 12.348 71.541-2.824 79.058-2.824c7.517 0 15.034 15.172 22.551 45.515l40.368 5.842a5 5 0 0 1 2.767 8.536l-29.197 28.346c4.005 32.679 2.89 48.515-3.346 47.507-6.235-1.008-18.741-8.417-37.518-22.225z'
                  fill='#D9D9D9'
                  fill-rule='nonzero'
                  mask='url(#b)'
                ></path>
                <g
                  stroke='#727272'
                  mask='url(#b)'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path
                    d='M83.563 86.61c-6.709-8.605-18.136-3.685-19.635 0'
                    stroke-width='3.125'
                  ></path>
                  <path
                    d='M54.766 68.283c4.269 1.893 7.75 1.196 10.352-2.39M81.498 65.893c3.007 3.573 6.441 4.472 10.352 2.39'
                    stroke-width='3.75'
                  ></path>
                </g>
              </g>
              <g
                opacity='.402'
                transform='translate(29 68.22)'
                stroke='#A6A6A6'
              >
                <path
                  d='M25.795 5.315h4.367a.874.874 0 0 1 0 1.75h-4.367v4.47a.874.874 0 1 1-1.746 0v-4.47h-4.367a.874.874 0 0 1 0-1.75h4.367V.875a.874.874 0 1 1 1.746 0v4.44z'
                  stroke-width='1.178'
                  fill='#A6A6A6'
                  opacity='.574'
                  stroke-linecap='round'
                ></path>
                <path
                  d='M186.766 24.3h4.367a.874.874 0 0 1 0 1.75h-4.367v4.47a.874.874 0 1 1-1.746 0v-4.47h-4.366a.874.874 0 0 1 0-1.75h4.366v-4.44a.874.874 0 1 1 1.746 0v4.44z'
                  stroke-width='1.178'
                  fill='#A6A6A6'
                  stroke-linecap='round'
                ></path>
                <path
                  d='M26.72 74.112h4.366a.874.874 0 0 1 0 1.75H26.72v4.47a.874.874 0 1 1-1.747 0v-4.47h-4.366a.874.874 0 0 1 0-1.75h4.366v-4.44a.874.874 0 1 1 1.747 0v4.44z'
                  stroke-width='1.178'
                  fill='#A6A6A6'
                  opacity='.289'
                  stroke-linecap='round'
                ></path>
                <ellipse
                  stroke-width='2.356'
                  cx='154.716'
                  cy='4.569'
                  rx='3.493'
                  ry='3.5'
                ></ellipse>
                <ellipse
                  stroke-width='2.356'
                  opacity='.401'
                  cx='179.791'
                  cy='68.739'
                  rx='3.493'
                  ry='3.5'
                ></ellipse>
                <ellipse
                  stroke-width='2.356'
                  cx='3.493'
                  cy='38.439'
                  rx='3.493'
                  ry='3.5'
                ></ellipse>
              </g>
            </g>
          </svg>
          <div>
            <h3>No Reviews (yet)</h3>
            <p>Your reviews will appear here</p>
            <Link to='/'>Shop Now</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buyer;
