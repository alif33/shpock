import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

const data = [
  {
    title: 'Mobile & Smart Phones',
    link: '/search',
    items: [
      {
        name: 'phones',
        link: '/search',
      },
      {
        name: 'Huawei',
        link: '/search',
      },
      {
        name: 'i phones',
        link: '/search',
      },
    ],
  },
    {
    title: 'Mobile & Smart Phones',
    link: '/search',
    items: [
      {
        name: 'phones',
        link: '/search',
      },
      {
        name: 'Huawei',
        link: '/search',
      },
      {
        name: 'i phones',
        link: '/search',
      },
    ],
  },
];
const ProductsTags = () => {
  return (
    <Row className='product-tag'>
      <Col>
        {data &&
          data.map((item, i) => (
            <div className='tags-item'>
              <Link to={item.link}>{item.title}</Link>
              <div className='tags-items'>
                {item.items &&
                  item.items.map((tag, j) => (
                    <Link to={tag.link}>{tag.name},</Link>
                  ))}
              </div>
            </div>
          ))}
      </Col>
    </Row>
  );
};

export default ProductsTags;
