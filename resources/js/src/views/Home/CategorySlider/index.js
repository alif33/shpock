import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Row } from 'reactstrap';
import { useQuery } from 'react-query'
import { getData } from '../../../services/HttpService'

const index = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows: true,
  };

  const { data } = useQuery('categories', ()=> getData('/categories'))

  console.log('Data', data);
  // useEffect(()=>{
    
  // }, [])

  return (
    <Row className='category-slider'>
      <Col md={10}>
        <Slider {...settings}>
          {data?.map(category=>{
              return(
                <Link key={category.id} to='/search' className='category-items'>
                  <div>
                    <svg viewBox='0 0 32 32' className='SVG-wlnxuy-0 bIwcGB'>
                      <defs>
                        <path
                          id='laptop-with-mouse-styled-path-1'
                          d='M22 .891H1a1 1 0 0 0-.993.883L0 1.891v13h18v-1a4 4 0 0 1 4.77-3.926l.23.052V1.891a1 1 0 0 0-.883-.993L22 .89z'
                        ></path>
                        <path
                          id='laptop-with-mouse-styled-path-2'
                          d='M22 .891l.117.007A1 1 0 0 1 23 1.89v.035l-.04.003c-3.947.214-8.003-.159-11.803.86C6.288 4.095.729 10.134 8.139 12.536c1.674.542 6.213 1.15 9.862 2.218L18 14.89H0v-13l.007-.117A1 1 0 0 1 1 .891h21z'
                        ></path>
                      </defs>
                      <g fill='currentColor' fillRule='nonzero'>
                        <path d='M26 5a2 2 0 0 1 2 2l.001 8.536-.066-.037A3.999 3.999 0 0 1 30 19v4a4 4 0 0 1-7.874 1H4a2 2 0 0 1-2-2v-1a1 1 0 0 1 .999-1L3 7a2 2 0 0 1 2-2h21zm0 11a3 3 0 0 0-2.995 2.824L23 19v4a3 3 0 0 0 5.995.176L29 23v-4a3 3 0 0 0-3-3zm-4 5H3v1a1 1 0 0 0 .883.993L4 23h18v-2zm4-3a.5.5 0 0 1 .492.41l.008.09V20a.5.5 0 0 1-.992.09L25.5 20v-1.5a.5.5 0 0 1 .5-.5zm0-12H5a1 1 0 0 0-.993.883L4 7v13h18v-1a4 4 0 0 1 4.77-3.926l.23.052V7a1 1 0 0 0-.883-.993L26 6z'></path>
                        <g transform='translate(4 5.109)'>
                          <use opacity='.05'></use>
                          <use opacity='.15'></use>
                        </g>
                        <path
                          d='M26 16a3 3 0 0 1 3 3v4l-.005.176A3 3 0 0 1 23 23v-4l.005-.176A3 3 0 0 1 26 16zm-4 5v2H4l-.117-.007A1 1 0 0 1 3 22v-1h19z'
                          opacity='.15'
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <h6 className='title'>{category.category_name}</h6>
                </Link>
              )
          })}

          <Link to='#' className='category-items'>
            <div>
              <svg viewBox='0 0 32 32' className='SVG-wlnxuy-0 bIwcGB'>
                <defs>
                  <path
                    id='t-shirt-styled-path-1'
                    d='M9 1.074l.102.095.197.16c.805.618 1.816.955 2.901.955l.243-.006.256-.019c.928-.095 1.716-.458 2.317-1.064l.05-.054 3.297 1.117.176.082.174.094c1.5.855 2.813 2.92 3.877 6.206l.12.377-3.38 1.681-.35-.781-.044-.08-.053-.068c-.286-.302-.86-.124-.86.352v11.162H5.787V10.121l-.007-.091-.021-.083c-.138-.393-.734-.465-.928-.03l-.35.781-3.38-1.68.106-.338.116-.355C2.49 4.822 3.9 2.758 5.423 2.33l3.576-1.256zm7.304 7.016h-2.2v2.305a.5.5 0 0 0 .41.492l.09.008h1.2a.5.5 0 0 0 .493-.41l.008-.09V8.09z'
                  ></path>
                  <path
                    id='t-shirt-styled-path-2'
                    d='M9 1.074l.102.095.197.16c.474.364 1.02.63 1.61.788-1.909.749-3.977 1.35-4.826 3.08-.19.388.84 5.741 2.401 13.135.193.912 1.249 1.588 2.162 1.774 2.406.492 4.94.013 7.377.24v.937H5.787V10.121l-.007-.091-.021-.083c-.129-.367-.656-.454-.884-.11l-.044.08-.35.781-3.38-1.68.106-.338.116-.355C2.452 4.94 3.807 2.897 5.27 2.378l.152-.048 3.576-1.256z'
                  ></path>
                </defs>
                <g
                  fill='currentColor'
                  fillRule='nonzero'
                  transform='translate(4.34 4.716)'
                >
                  <path d='M8.96.028a.5.5 0 0 1 .532.13c.673.72 1.637 1.126 2.708 1.126 1.01 0 1.789-.358 2.315-1.03a.5.5 0 0 1 .467-.187l.087.02 3.655 1.239c2.139.934 3.808 3.548 5.066 7.81a.5.5 0 0 1-.18.543l-.077.046-4.224 2.101a.499.499 0 0 1-.175.05l-.088.001-.023-.005v9.912a.5.5 0 0 1-.325.469l-.085.023-.09.008H5.288a.5.5 0 0 1-.492-.41l-.008-.09v-9.912l-.022.005h-.088l-.089-.017-.086-.034-4.225-2.1a.5.5 0 0 1-.256-.59c1.282-4.344 2.915-7.014 4.918-7.702l.183-.057L8.96.028zM9 1.074L5.422 2.33c-1.523.428-2.932 2.492-4.1 5.995l-.116.355-.107.337 3.38 1.681.351-.781c.194-.435.79-.363.928.03l.021.083.007.09v11.163h12.236V10.121c0-.476.574-.654.86-.352l.053.067.044.08.35.782 3.38-1.68-.12-.378c-1.064-3.285-2.377-5.351-3.877-6.206l-.174-.094-.176-.082-3.298-1.117-.05.054c-.6.606-1.388.97-2.316 1.064l-.256.02-.243.005c-1.085 0-2.096-.337-2.9-.955l-.198-.16L9 1.074zm8.305 6.017v3.304a1.5 1.5 0 0 1-1.5 1.5h-1.2a1.5 1.5 0 0 1-1.5-1.5V7.09h4.2zm-1 1h-2.2v2.304a.5.5 0 0 0 .41.492l.09.008h1.2a.5.5 0 0 0 .492-.41l.008-.09V8.09z'></path>
                  <use opacity='.05'></use>
                  <use opacity='.15'></use>
                </g>
              </svg>
            </div>
            <h6 className='title'>
              Fashion & <br /> Accessories
            </h6>
          </Link>
          <Link to='#' className='category-items'>
            <div>
              <svg viewBox='0 0 32 32' className='SVG-wlnxuy-0 bIwcGB'>
                <defs>
                  <path
                    id='couch-styled-path-1'
                    d='M20.727 7.749l.137.005c.95.073 1.697.898 1.697 1.904v7.636H.393V9.658L.4 9.516c.07-.988.862-1.767 1.829-1.767 1.013 0 1.834.855 1.834 1.91v1.488l1.166-.343.526-.148c1.577-.418 4.15-.627 5.723-.627 1.748 0 4.498.258 6.25.775l1.167.344v-1.49l.005-.142c.07-.988.862-1.767 1.828-1.767zM18.057.065L18.2.07c1.072.079 1.925 1.05 1.925 2.244v4.55c-1.229.286-2.147 1.429-2.147 2.794v.228c-1.833-.541-4.666-.812-6.5-.812-1.833 0-4.666.27-6.499.811v-.227c0-1.422-.996-2.603-2.302-2.826V2.314l.004-.154C2.753.986 3.652.065 4.742.065h13.316z'
                  ></path>
                  <path
                    id='couch-styled-path-2'
                    d='M2.228 7.749c.965 0 1.755.775 1.828 1.76l.006.15v1.488l1.166-.343.526-.148c.792-.21 1.836-.367 2.878-.472 2.407 2.48 8.613 3.059 13.928 3.486v3.624H.394V9.658L.4 9.516c.07-.988.862-1.767 1.829-1.767zm5.759 1.559l-.258.031c-.83.11-1.641.255-2.343.435l-.408.111v-.227c0-1.36-.911-2.5-2.133-2.791l-.169-.035V2.314l.004-.154C2.75 1.04 3.572.15 4.594.07l.148-.005 7.432.001C7.879 4.446 6.959 7.35 7.987 9.308z'
                  ></path>
                </defs>
                <g fill='currentColor' fillRule='nonzero'>
                  <path d='M22.58 5.998c1.594 0 2.89 1.34 2.978 3.022l.005.182V13.7c1.372.162 2.437 1.374 2.437 2.846v9.545c0 .527-.41.954-.917.954h-3.666c-.507 0-.917-.427-.917-.954v-.955h-13v.955c0 .527-.41.954-.917.954H4.917c-.507 0-.917-.427-.917-.954v-9.545c0-1.416.986-2.591 2.281-2.823V9.202c0-1.705 1.241-3.105 2.813-3.2l.17-.004H22.58zM8.583 25.136H4.917v.955h3.666v-.955zm18.5 0h-3.666v.955h3.666v-.955zm-1.833-10.5c-.967 0-1.759.78-1.829 1.767l-.005.143v1.49l-1.166-.345c-1.753-.517-4.502-.775-6.25-.775-1.573 0-4.147.21-5.724.628l-.525.147-1.166.344-.001-1.49c0-1.054-.821-1.909-1.834-1.909-.966 0-1.758.78-1.828 1.767l-.005.143v7.636h22.165l.001-7.636c0-1.007-.748-1.832-1.696-1.905l-.137-.005zm-2.67-7.684H9.264c-1.09 0-1.989.922-2.062 2.095l-.004.155v4.518c1.306.222 2.303 1.403 2.303 2.826v.226c1.833-.54 4.666-.81 6.499-.81 1.833 0 4.666.27 6.5.81v-.226c0-1.366.918-2.509 2.146-2.795V9.2c0-1.194-.853-2.165-1.925-2.244l-.141-.005z'></path>
                  <path
                    d='M8.583 25.136v.955H4.917v-.955h3.666zm18.5 0v.955h-3.666v-.955h3.666z'
                    opacity='.15'
                  ></path>
                  <g transform='translate(4.522 6.887)'>
                    <use opacity='.05'></use>
                    <use opacity='.15'></use>
                  </g>
                </g>
              </svg>
            </div>
            <h6 className='title'>
              Home & <br /> Garden
            </h6>
          </Link>
          <Link to='#' className='category-items'>
            <div>
              <svg viewBox='0 0 32 32' className='SVG-wlnxuy-0 bIwcGB'>
                <defs>
                  <path
                    id='baby-carriage-styled-path-1'
                    d='M.472 8.982h17.672c-.165 1.987-1.03 3.752-2.582 5.16a3.56 3.56 0 0 0-1.688-.423 3.605 3.605 0 0 0-3.42 2.493c-.154.024-.302.039-.46.046l-.13.005H8.44l-.263-.009a4.576 4.576 0 0 1-.228-.016l-.259-.035a3.605 3.605 0 0 0-3.416-2.484c-.44 0-.86.08-1.25.224l-.266-.3c-1.44-1.66-2.16-3.06-2.285-4.65l-.001-.011zM9.734 0l.257.02c4.411.41 8.032 3.355 8.178 7.962H9.734V0z'
                  ></path>
                  <path
                    id='baby-carriage-styled-path-2'
                    d='M16.565 13.062l-.07.09a8.497 8.497 0 0 1-.933.99 3.56 3.56 0 0 0-1.688-.423 3.605 3.605 0 0 0-3.42 2.493l-.229.03-.232.016-.13.005H8.44l-.263-.009-.115-.007-.113-.01-.259-.034a3.605 3.605 0 0 0-3.416-2.484c-.352 0-.692.05-1.013.145l-.237.08-.266-.3C1.403 12.08.685 10.749.501 9.27l-.028-.278-.001-.011 3.896.001c-.061 3.777 6.95 3.768 12.197 4.08z'
                  ></path>
                </defs>
                <g fill='currentColor' fillRule='nonzero'>
                  <path d='M17.5 5.003c5.403 0 9.94 3.75 9.94 9.286 0 2.492-.944 4.73-2.791 6.476a3.633 3.633 0 0 1 1.09 2.603c0 2.006-1.611 3.632-3.6 3.632-1.988 0-3.6-1.626-3.6-3.632l.004-.109-.238.016-.186.006c-.063.001-.133.002-.22.001l-.348-.002h-.917l-.24-.009-.256-.019.002.116c0 2.006-1.612 3.632-3.6 3.632-1.989 0-3.6-1.626-3.6-3.632 0-1.193.57-2.251 1.45-2.913-1.74-1.97-2.591-3.658-2.665-5.666L7.72 14.5a13.93 13.93 0 0 0-.325-3.038A2.387 2.387 0 0 1 5.4 12.54 2.41 2.41 0 0 1 3 10.118a2.41 2.41 0 0 1 2.918-2.364c.238.044.46.132.666.257.328.189.608.453.816.769l.098.162c.765 1.174 1.159 3.06 1.215 5.058H17V5.503a.5.5 0 0 1 .41-.492l.09-.008zm-4.96 15.734c-1.434 0-2.6 1.176-2.6 2.631 0 1.456 1.166 2.632 2.6 2.632 1.434 0 2.6-1.176 2.6-2.632 0-1.455-1.166-2.631-2.6-2.631zm9.6 0c-1.434 0-2.6 1.176-2.6 2.631 0 1.456 1.166 2.632 2.6 2.632 1.434 0 2.6-1.176 2.6-2.632 0-1.455-1.166-2.631-2.6-2.631zM26.41 15H8.739l.001.01c.125 1.591.845 2.991 2.285 4.652l.266.3c.39-.146.81-.225 1.25-.225 1.59 0 2.94 1.04 3.416 2.484l.259.035c.075.007.15.013.228.016l.263.008h1.424l.13-.004c.158-.007.306-.022.46-.046a3.605 3.605 0 0 1 3.42-2.493c.61 0 1.185.153 1.688.423 1.553-1.408 2.418-3.173 2.583-5.16zm-8.152-8.962L18 6.018V14h8.435c-.146-4.607-3.767-7.552-8.177-7.962zM5.4 8.698c-.771 0-1.4.634-1.4 1.42a1.41 1.41 0 0 0 1.4 1.422c.771 0 1.4-.635 1.4-1.422 0-.21-.045-.41-.126-.59a2.245 2.245 0 0 0-.477-.565l-.145-.102a1.378 1.378 0 0 0-.652-.164z'></path>
                  <g transform='translate(8.266 6.018)'>
                    <use opacity='.05'></use>
                    <use opacity='.15'></use>
                  </g>
                  <path
                    d='M12.54 20.737c1.434 0 2.6 1.176 2.6 2.631 0 1.456-1.166 2.632-2.6 2.632-1.434 0-2.6-1.176-2.6-2.632 0-1.455 1.166-2.631 2.6-2.631zm9.6 0c1.434 0 2.6 1.176 2.6 2.631 0 1.456-1.166 2.632-2.6 2.632-1.434 0-2.6-1.176-2.6-2.632 0-1.455 1.166-2.631 2.6-2.631z'
                    opacity='.05'
                  ></path>
                </g>
              </svg>
            </div>
            <h6 className='title'>
              Baby & <br />
              Child
            </h6>
          </Link>
          <Link to='#' className='category-items'>
            <div>
              <svg viewBox='0 0 32 32' className='SVG-wlnxuy-0 bIwcGB'>
                <g fill='currentColor' fillRule='nonzero'>
                  <path d='M25.154 8.1c1.376.018 2.117.907 2.117 2.448a.5.5 0 0 1-.391.488l-.087.011a.501.501 0 0 1-.612-.487c0-.967-.303-1.387-.99-1.442l-.133-.006h-2.394l1.473 5.9a5.5 5.5 0 1 1-.992.157l-.539-2.158-6.418 7.524a.495.495 0 0 1-.316.172l-.167.01h-2.71a5.5 5.5 0 1 1-3.196-5.215l1.597-2.605.022-.03-1.246-2.392a.5.5 0 0 1-.049-.144h-1.45a.5.5 0 0 1-.09-.992l.09-.008h3.98a.5.5 0 0 1 .09.992l-.09.008h-1.428l.75 1.439h10.321l-.76-3.049a.5.5 0 0 1 .399-.613l.086-.008h3.133zM7.5 16a4.5 4.5 0 1 0 4.495 4.717H7.5a.5.5 0 0 1-.463-.69l.037-.072 2.199-3.592A4.485 4.485 0 0 0 7.5 16zm17 0l-.117.002 1.021 4.093a.5.5 0 0 1-.94.328l-.03-.086-1.048-4.198A4.502 4.502 0 0 0 24.5 25a4.5 4.5 0 1 0 0-9zm-12.545-2.103l-1.289 2.105a5.499 5.499 0 0 1 2.279 3.715h2.041l-3.031-5.82zm-1.812 2.96l-1.751 2.859h3.54a4.5 4.5 0 0 0-1.79-2.859zm11.354-4.087h-9.001l3.413 6.552 5.588-6.552z'></path>
                  <path
                    d='M7.5 16c.63 0 1.229.13 1.773.363l-2.2 3.592-.036.073a.5.5 0 0 0 .463.688h4.495A4.5 4.5 0 1 1 7.5 16zm17 0a4.5 4.5 0 1 1-1.114.139l1.048 4.198.03.086a.5.5 0 0 0 .94-.328l-1.021-4.093zm-14.357.857a4.5 4.5 0 0 1 1.789 2.858l-3.54.001z'
                    opacity='.05'
                  ></path>
                  <path
                    d='M9.294 24.628l-.138.057a4.5 4.5 0 1 1-2.118-8.662c-4.22 2.77.395 6.306 2.256 8.605zm14.092-8.489l.077.31c-3.187 2.7 1.065 5.998 2.832 8.18a4.5 4.5 0 0 1-3.109-8.434l.2-.056z'
                    opacity='.15'
                  ></path>
                </g>
              </svg>
            </div>
            <h6 className='title'>
              Sport,
              <br />
              Leisure &
            </h6>
          </Link>
          <Link to='#' className='category-items'>
            <div>
              <svg viewBox='0 0 32 32' className='SVG-wlnxuy-0 bIwcGB'>
                <defs>
                  <path
                    id='vinyl-styled-path-1'
                    d='M10 .518c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm-.134 8.424a1.485 1.485 0 1 0 0 2.97 1.485 1.485 0 0 0 0-2.97z'
                  ></path>
                  <path
                    id='vinyl-styled-path-2'
                    d='M10 .518c1.705 0 3.31.427 4.715 1.18-8.5 2.459-10.08 4.47-10.08 10.213 0 5.563 6.576 6.112 10.88 6.63.127.015.241.042.344.08A9.946 9.946 0 0 1 10 20.519c-5.523 0-10-4.477-10-10s4.477-10 10-10z'
                  ></path>
                </defs>
                <g fill='none' fillRule='evenodd'>
                  <g
                    fill='#486270'
                    fillRule='nonzero'
                    transform='translate(6 5.482)'
                  >
                    <use opacity='.05'></use>
                    <use opacity='.15'></use>
                  </g>
                  <path
                    fill='currentColor'
                    fillRule='nonzero'
                    d='M16 5c6.075 0 11 4.925 11 11s-4.925 11-11 11S5 22.075 5 16 9.925 5 16 5zm0 1C10.477 6 6 10.477 6 16s4.477 10 10 10 10-4.477 10-10S21.523 6 16 6zm7.35 9.578a.5.5 0 0 1 .5.5 7.944 7.944 0 0 1-7.944 7.944.5.5 0 1 1 0-1 6.944 6.944 0 0 0 6.944-6.944.5.5 0 0 1 .5-.5zm-7.484-2.155a2.485 2.485 0 1 1 0 4.97 2.485 2.485 0 0 1 0-4.97zm0 1a1.485 1.485 0 1 0 0 2.97 1.485 1.485 0 0 0 0-2.97zm.04-6.288a.5.5 0 0 1 0 1 6.944 6.944 0 0 0-6.943 6.943.5.5 0 1 1-1 0 7.944 7.944 0 0 1 7.943-7.943z'
                  ></path>
                </g>
              </svg>
            </div>
            <h6 className='title'>
              Sport,
              <br />
              Leisure &
            </h6>
          </Link>
          <Link to='#' className='category-items'>
            <div>
              <svg viewBox='0 0 32 32' className='SVG-wlnxuy-0 bIwcGB'>
                <defs>
                  <path
                    id='vinyl-styled-path-1'
                    d='M10 .518c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm-.134 8.424a1.485 1.485 0 1 0 0 2.97 1.485 1.485 0 0 0 0-2.97z'
                  ></path>
                  <path
                    id='vinyl-styled-path-2'
                    d='M10 .518c1.705 0 3.31.427 4.715 1.18-8.5 2.459-10.08 4.47-10.08 10.213 0 5.563 6.576 6.112 10.88 6.63.127.015.241.042.344.08A9.946 9.946 0 0 1 10 20.519c-5.523 0-10-4.477-10-10s4.477-10 10-10z'
                  ></path>
                </defs>
                <g fill='none' fillRule='evenodd'>
                  <g
                    fill='#486270'
                    fillRule='nonzero'
                    transform='translate(6 5.482)'
                  >
                    <use opacity='.05'></use>
                    <use opacity='.15'></use>
                  </g>
                  <path
                    fill='currentColor'
                    fillRule='nonzero'
                    d='M16 5c6.075 0 11 4.925 11 11s-4.925 11-11 11S5 22.075 5 16 9.925 5 16 5zm0 1C10.477 6 6 10.477 6 16s4.477 10 10 10 10-4.477 10-10S21.523 6 16 6zm7.35 9.578a.5.5 0 0 1 .5.5 7.944 7.944 0 0 1-7.944 7.944.5.5 0 1 1 0-1 6.944 6.944 0 0 0 6.944-6.944.5.5 0 0 1 .5-.5zm-7.484-2.155a2.485 2.485 0 1 1 0 4.97 2.485 2.485 0 0 1 0-4.97zm0 1a1.485 1.485 0 1 0 0 2.97 1.485 1.485 0 0 0 0-2.97zm.04-6.288a.5.5 0 0 1 0 1 6.944 6.944 0 0 0-6.943 6.943.5.5 0 1 1-1 0 7.944 7.944 0 0 1 7.943-7.943z'
                  ></path>
                </g>
              </svg>
            </div>
            <h6 className='title'>
              Films,
              <br />
              Leisure &
            </h6>
          </Link>
          <Link to='#' className='category-items'>
            <div>
              <svg viewBox='0 0 32 32' className='SVG-wlnxuy-0 bIwcGB'>
                <defs>
                  <path
                    id='car-icon-styled-path-1'
                    d='M12.86 2.877c3.446 0 6.924.335 10.436 1.003a.57.57 0 0 1 .457.471l.007.09v6.363l-.006.117c-.054.5-.451.896-.95.95l-.117.006H2.833l-.117-.006c-.5-.054-.896-.45-.95-.95l-.006-.117V4.448l.007-.09a.57.57 0 0 1 .46-.47c3.632-.674 7.177-1.01 10.634-1.01zm6.433 3a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-12.914 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm18.805-5l-.007.01c-.002.028.046.128.046.294v.742l-.005.092c-.015.14-.06.212-.034.212h-1.162l-.61-1.35h1.772zm-22.668 0l-.61 1.35H.299l.008-.009c.001-.022-.03-.09-.042-.203L.26 1.923v-.742l.005-.092C.277.977.308.91.307.886L.299.877h2.217z'
                  ></path>
                </defs>
                <g fill='none' fillRule='evenodd'>
                  <path
                    fill='currentColor'
                    fillRule='nonzero'
                    d='M22.144 6c.656 0 1.258.345 1.57.897l.066.13 2.421 5.361h2.223c.587 0 .987.542 1.035 1.177l.005.128v.742c0 .644-.364 1.226-.925 1.296l-.115.007h-.999c.354.29.575.73.575 1.214v6.364c0 .913-.591 1.69-1.412 1.965v.868c0 2.405-4.323 2.458-4.515.16l-.007-.16-.001-.761h-11.93v.76c0 2.406-4.322 2.46-4.515.161l-.006-.16v-.811A2.074 2.074 0 0 1 4 23.316v-6.357c0-.488.225-.931.584-1.222l-1.045.001-.115-.007c-.523-.065-.875-.576-.92-1.168l-.004-.128v-.742l.005-.128c.044-.592.396-1.104.92-1.17l.114-.006h2.427l.09.008c.045.008.089.023.129.042l2.444-5.413a1.781 1.781 0 0 1 1.485-1.02l.15-.006h11.88zM9.135 25.388H6.613v.76c0 1.087 2.346 1.126 2.513.117l.01-.116-.001-.761zm16.452 0h-2.522l.001.76c0 1.087 2.345 1.126 2.512.117l.01-.116-.001-.761zm-9.486-10c-3.457 0-7.001.337-10.634 1.01a.57.57 0 0 0-.46.471L5 16.96v6.357c0 .553.419 1.008.956 1.066l.117.007h19.854c.553 0 1.008-.419 1.067-.956l.006-.117v-6.364a.57.57 0 0 0-.464-.56 55.701 55.701 0 0 0-10.435-1.003zm6.432 2a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zm-12.913 0a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zm12.913 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-12.913 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM22.144 7h-11.88a.804.804 0 0 0-.672.345l-.052.094-3.546 7.85.212-.038a58.798 58.798 0 0 1 9.895-.862c3.417 0 6.865.322 10.344.968L22.87 7.44a.777.777 0 0 0-.607-.433L22.144 7zm5.118 7.738h1.162c-.025 0 .02-.072.035-.211l.005-.092v-.742c0-.167-.049-.267-.047-.296l.007-.008-1.772-.001.61 1.35zm-21.506-1.35H3.539l.008.01c.001.022-.03.09-.042.203l-.005.092v.742l.005.092c.012.111.043.18.042.203l-.008.008h1.607l.61-1.35z'
                  ></path>
                  <use
                    fill='currentColor'
                    fillRule='nonzero'
                    opacity='.15'
                    transform='translate(3.24 12.511)'
                  ></use>
                  <path
                    fill='currentColor'
                    fillRule='nonzero'
                    d='M22.144 7h-11.88a.804.804 0 0 0-.672.345l-.052.094-3.546 7.85.212-.038a58.798 58.798 0 0 1 9.895-.862c3.417 0 6.865.322 10.344.968L22.87 7.44a.777.777 0 0 0-.607-.433L22.144 7z'
                    opacity='.05'
                  ></path>
                  <path
                    fill='currentColor'
                    fillRule='nonzero'
                    d='M11.73 10.417c-.17 1.802 2.728 3.019 5.394 3.982-.342-.007-.683-.01-1.023-.01-3.226 0-6.524.287-9.895.862l-.212.038 3.546-7.85.052-.094A.804.804 0 0 1 10.265 7h4.79c-1.782.704-3.161 1.668-3.325 3.417z'
                    opacity='.15'
                  ></path>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    d='M14 23h4.5M14.5 8.5h3'
                  ></path>
                  <path
                    fill='currentColor'
                    fillRule='nonzero'
                    d='M9.135 25.388v.76l-.009.117c-.167 1.009-2.512.97-2.512-.116l-.001-.761h2.522zm16.452 0v.76l-.009.117c-.167 1.009-2.512.97-2.512-.116l-.001-.761h2.522z'
                    opacity='.05'
                  ></path>
                </g>
              </svg>
            </div>
            <h6 className='title'>
              Sport,
              <br />
              Leisure &
            </h6>
          </Link>
          <Link to='#' className='category-items'>
            <div>
              <svg viewBox='0 0 32 32' className='SVG-wlnxuy-0 bIwcGB'>
                <defs>
                  <path
                    id='house-styled-path-1'
                    d='M10.48.083l9.319 8.835.105.092c.179.136.388.213.6.231v6.652l-.007.092a.553.553 0 0 1-.54.473h-6.835l.001-3.647-.006-.119c-.048-.491-.402-.67-.896-.677H8.732l-.113.005c-.478.035-.796.25-.796.791l-.001 3.646h-6.58l-.088-.007a.56.56 0 0 1-.46-.557V9.376c.21-.043.409-.144.573-.304L10.48.083zm-.04 5.802a1.639 1.639 0 1 0 0 3.277 1.639 1.639 0 0 0 0-3.277z'
                  ></path>
                  <path
                    id='house-styled-path-2'
                    d='M20.102 16.367l.105.028a.534.534 0 0 1-.162.055l-.089.008h-6.834v-2.126c2.046.717 4.428 1.355 6.98 2.035zM8.439 12.045l-.028.005c-.327.072-.546.264-.583.642l-.005.119-.001 3.646H1.046l-.088-.007a.557.557 0 0 1-.452-.465l-.008-.092V9.376c.168-.034.329-.106.47-.215l.103-.089L8.58 1.9c-3.421 5.082-2.917 8.059-.141 10.146z'
                  ></path>
                </defs>
                <g fill='currentColor' fillRule='nonzero'>
                  <path d='M16.683 5.235l11.01 10.791a1.15 1.15 0 0 1 .012 1.611l-.702.724v7.078c0 .814-.616 1.486-1.406 1.558l-.141.006H18.12a.5.5 0 0 1-.492-.41l-.008-.09.001-3.942h-3.301v3.942a.5.5 0 0 1-.41.492l-.09.008H6.546c-.81 0-1.47-.626-1.542-1.422l-.006-.142-.001-6.79-.053-.05-.849-.959a1.15 1.15 0 0 1 .052-1.578l3.157-3.13V8.715c0-.675.542-1.213 1.219-1.278l.137-.006h1.71c.686 0 1.266.485 1.346 1.13l3.554-3.33a1 1 0 0 1 1.413.004zM15.98 9.63L6.57 18.62c-.164.16-.363.26-.572.303v6.517c0 .282.2.514.46.557l.088.007h6.775l.001-3.646c0-.54.319-.757.797-.791l.113-.005h3.488c.495.008.849.185.897.677l.005.119-.001 3.646h6.835c.27 0 .497-.203.54-.472l.007-.092.001-6.652a1.145 1.145 0 0 1-.6-.232l-.106-.09-9.319-8.836zm-.04 4.802a2.639 2.639 0 1 1 0 5.277 2.639 2.639 0 0 1 0-5.277zm0 1a1.639 1.639 0 1 0 0 3.277 1.639 1.639 0 0 0 0-3.277zm.035-9.49l-7.67 7.408-3.453 3.423a.15.15 0 0 0-.031.167l.025.039.815.922a.15.15 0 0 0 .173.03l.039-.028 10.107-9.67 10.018 9.517a.15.15 0 0 0 .174.025l.038-.028.778-.804a.15.15 0 0 0 .026-.172l-.028-.038-11.01-10.79zm-5.603 2.49H8.66c-.18 0-.317.105-.349.23l-.007.054v3.226l2.421-2.4.001-.826c0-.129-.115-.25-.281-.278l-.074-.006z'></path>
                  <g transform='translate(5.5 9.546)'>
                    <use opacity='.05'></use>
                    <use opacity='.15'></use>
                  </g>
                </g>
              </svg>
            </div>
            <h6 className='title'>Property</h6>
          </Link>
          <Link to='#' className='category-items'>
            <div>
              <svg viewBox='0 0 32 32' className='SVG-wlnxuy-0 bIwcGB'>
                <defs>
                  <path
                    id='paint-roller-styled-path-1'
                    d='M10.447 14.241v7h-2v-7h2zm6.816-14l.09.008a.5.5 0 0 1 .41.492v4.113l-.008.09a.5.5 0 0 1-.492.41H.947l-.09-.008a.5.5 0 0 1-.41-.492V.741l.008-.09a.5.5 0 0 1 .492-.41h16.316z'
                  ></path>
                  <path
                    id='paint-roller-styled-path-2'
                    d='M10.447 14.241v7h-2v-7h2zM7.38 4.312c-.045.302.038.651.226 1.04l-6.66.002-.09-.008a.5.5 0 0 1-.402-.402l-.008-.09V.741l.008-.09A.5.5 0 0 1 .857.25l.09-.008h9.914c-1.869.919-3.203 2.207-3.48 4.071z'
                  ></path>
                </defs>
                <g fill='currentColor' fillRule='nonzero'>
                  <path d='M22.816 5a1.5 1.5 0 0 1 1.493 1.356l.007.144V8h1.235a1.45 1.45 0 0 1 1.442 1.31l.007.14v5.1a1.45 1.45 0 0 1-1.31 1.443l-.14.007h-9.6a.45.45 0 0 0-.443.368l-.007.081V19h.55a.95.95 0 0 1 .95.95v6.1a.95.95 0 0 1-.95.95h-2.1a.95.95 0 0 1-.95-.95v-6.1a.95.95 0 0 1 .95-.95h.55v-2.55a1.45 1.45 0 0 1 1.31-1.443l.14-.007h9.6a.45.45 0 0 0 .443-.368L26 14.55V9.449a.45.45 0 0 0-.368-.442L25.55 9h-1.235v1.613a1.5 1.5 0 0 1-1.356 1.493l-.144.007H6.5a1.5 1.5 0 0 1-1.493-1.356L5 10.613V6.5a1.5 1.5 0 0 1 1.356-1.493L6.5 5h16.316zM16 20h-2v6h2v-6zm6.816-14H6.5a.5.5 0 0 0-.492.41L6 6.5v4.113a.5.5 0 0 0 .41.492l.09.008h16.316a.5.5 0 0 0 .492-.41l.008-.09V6.5a.5.5 0 0 0-.41-.492L22.816 6z'></path>
                  <g transform='translate(5.553 5.759)'>
                    <use opacity='.05'></use>
                    <use opacity='.15'></use>
                  </g>
                </g>
              </svg>
            </div>
            <h6 className='title'>Services</h6>
          </Link>
          <Link to='#' className='category-items'>
            <div>
              <svg viewBox='0 0 32 32' className='SVG-wlnxuy-0 bIwcGB'>
                <g fill='currentColor' fillRule='nonzero'>
                  <path d='M7 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM7 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'></path>
                  <path
                    d='M7 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm9 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm9 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z'
                    opacity='.05'
                  ></path>
                </g>
              </svg>
            </div>
            <h6 className='title'>Other</h6>
          </Link>
        </Slider>
      </Col>
    </Row>
  );
};

export default index;
