import React from 'react';

const data = [
  {
    img: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/04/2-2.jpg',
    title: 'RO water purifier',
    price: 'BDT 18,500.00',
  },
];
const Buying = () => {
  return (
    <>
      {data &&
        data.map((item, i) => (
          <div className='buying d-flex align-items-center'>
            <div>
              <img src={item.img} alt='' />
            </div>
            <div className='content'>
              <h4>{item.title}</h4>
              <h4>{item.price}</h4>
            </div>
          </div>
        ))}
    </>
  );
};

export default Buying;
