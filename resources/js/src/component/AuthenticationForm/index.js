import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Signup from './Signup'
import Login from './Login'
import { useSelector, useDispatch } from 'react-redux';
import { 
  attemptToForget,
  attemptToLogin,
  attemptToSignup, 
} from "../../redux/settings/actions";


const Authentication = () => {

  const { settings } = useSelector(state=>state)
  const dispatch = useDispatch();

  const LoginHandler = ()=>{
      console.log('hello ismail');
  }
  const backtologin = () => {
    setLogin(false);
    setForgoPassword(false);
  };


  return (
    <div className='authentication'>
      {settings.forget ? (
        <div className='forgot-password'>
          <h4>Forgot password</h4>
          <p>
            Please enter a valid e-mail address. We will send you further
            instructions to change your password.
          </p>
          <Form>
            <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
              <Input
                type='email'
                name='email'
                id='exampleEmail'
                placeholder='Email Address'
              />
            </FormGroup>
            <Button >Send reset Link</Button>
          </Form>
          <div>

          <h6 onClick={() => dispatch(attemptToLogin()) }> Back to login</h6>
          </div>
        </div>
      ) : settings.signup ? (
        <Signup />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Authentication;
