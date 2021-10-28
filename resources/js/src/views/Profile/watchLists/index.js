import React from 'react';
import { Col, Row } from 'reactstrap';
import ProductCard from '../../../component/ProductCard';

const data = [
  {
    id: 1,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg',
    title: 'Heron six stage water purifire',
    price: 'BDT 16,500.00',
    description:
      'বিশুদ্ধ পানি পান করুন সুস্থ থাকুন  আমরা দিচ্ছি মাসিক কিস্তিতে RO System Water Purifier Machine. মেশিনটি নিতে আজই যোগাযোগ করুনঃ',
  },
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Heron six stage water purifire',
    price: 'BDT 16,500.00',
    description:
      'বিশুদ্ধ পানি পান করুন সুস্থ থাকুন  আমরা দিচ্ছি মাসিক কিস্তিতে RO System Water Purifier Machine. মেশিনটি নিতে আজই যোগাযোগ করুনঃ',
  },
];

const WatchLists = () => {
  return (
    <div className='watchlist'>
      <Row>
        {data &&
          data.map((item, i) => (
            <Col md={3} className='mb-2'>
              <ProductCard
                image={item.image}
                title={item.title}
                price={item.price}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default WatchLists;
