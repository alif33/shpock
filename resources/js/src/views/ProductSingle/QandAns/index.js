import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const QandAns = () => {
  return (
    <div className='questions'>
      <h6>Questions and answers</h6>
      <div>
        <img
          src='https://webimg.secondhandapp.at/w-i-sxx/default_avatar_m_1'
          alt=''
        />
        <Form>
          <FormGroup>
            <Input type='textarea' />
          </FormGroup>
          <Button>Post question</Button>
        </Form>
      </div>
      <div className='footer-items'>Item listed on 10/08/2021</div>
    </div>
  );
};

export default QandAns;
