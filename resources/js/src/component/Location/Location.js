import React, { useState } from 'react';

import {
  Button,
  Input,
  InputGroup,
  Form,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
const Location = () => {
  const [Click, setClick] = useState(false);
  return (
    <div className='location'>
      <Button onClick={() => setClick(!Click)}>
        Location
        <svg
          viewBox='0 0 16 16'
          class='SVG__IconSVG-sc-741qml-0 jmSzln'
          className={`${Click && 'clicked'}`}
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
      <div className={`${Click && 'show'} not-show position-absolute`}>
        <Form className='search-box' onSubmit={(e) => e.preventDefault()}>
          <InputGroup
            size='lg'
            className='mx-auto drop-shadow border overflow-hidden d-flex align-items-center'
          >
            <Input type='search' placeholder='Enter a Zip Code  or City' />
            <InputGroupAddon addonType='append' className='bg-white'>
              <InputGroupText className=' border-0 bg-transparent border-start'>
                <Button
                  color='secondary'
                  type='submit'
                  className='p-0 btn-icon btn-circle drop-shadow  bg-transparent text-dark border-0'
                >
                  <svg
                    viewBox='0 0 24 24'
                    class='SVG__IconSVG-sc-741qml-0 jmSzln'
                  >
                    <path
                      d='M17.751 18.392l4.05 4.355a.752.752 0 0 1-.028 1.05.719.719 0 0 1-1.03-.029l-4.111-4.422a10.306 10.306 0 0 1-6.147 2.027C4.695 21.373 0 16.59 0 10.687S4.694 0 10.485 0c5.791 0 10.486 4.785 10.486 10.687 0 3.027-1.235 5.76-3.22 7.705zm-7.266 1.497c4.987 0 9.03-4.12 9.03-9.202 0-5.083-4.043-9.203-9.03-9.203-4.986 0-9.029 4.12-9.029 9.203 0 5.082 4.043 9.202 9.03 9.202z'
                      fill='currentColor'
                      fill-rule='nonzero'
                    ></path>
                  </svg>
                </Button>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <div className='btn-group border-top'>
            <Button className='cancel' onClick={() => setClick(!Click)}>
              Cancel
            </Button>
            <Button className='apply'>Apply</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Location;
