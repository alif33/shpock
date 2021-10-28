import React from 'react';
import { Col, Row } from 'reactstrap';
import ProductCard from '../../../component/ProductCard';

const data = [
  {
    id: 1,
    image:
      'data:image/jpeg;base64,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',
    title: 'Heron six stage water purifire',
    price: 'BDT 16,500.00',
    description:
      'বিশুদ্ধ পানি পান করুন সুস্থ থাকুন  আমরা দিচ্ছি মাসিক কিস্তিতে RO System Water Purifier Machine. মেশিনটি নিতে আজই যোগাযোগ করুনঃ',
  },
  {
    id: 1,
    image:
      'data:image/jpeg;base64,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',
    title: 'Heron six stage water purifire',
    price: 'BDT 16,500.00',
    description:
      'বিশুদ্ধ পানি পান করুন সুস্থ থাকুন  আমরা দিচ্ছি মাসিক কিস্তিতে RO System Water Purifier Machine. মেশিনটি নিতে আজই যোগাযোগ করুনঃ',
  },
];

const Items = () => {
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

export default Items;