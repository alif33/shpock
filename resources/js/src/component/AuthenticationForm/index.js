import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Authentication = ({ login = false }) => {
  const [signup, setLogin] = useState(login);
  const [forgoPassword, setForgoPassword] = useState(false);

  const backtologin = () => {
    setLogin(false);
    setForgoPassword(false);
  };
  return (
    <div className='authentication'>
      {forgoPassword ? (
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

          <h6 onClick={() => backtologin()}> Back to login</h6>
          </div>
        </div>
      ) : signup ? (
        <div className='signup'>
          <h5>
            Already a member?
            <span onClick={() => setLogin(false)}> Log In</span>
          </h5>
          <span className='line'></span>
          <h1>Sign up</h1>
          <div className='button-groups'>
            <Button>
              <svg viewBox='0 0 24 24' class='SVG__IconSVG-sc-741qml-0 jmSzln'>
                <g fill='none' fill-rule='evenodd'>
                  <path
                    fill='#EA4335'
                    d='M12 4.64c2.25 0 3.77.97 4.64 1.79l3.39-3.31A11.53 11.53 0 0012 0 12 12 0 001.28 6.61l3.88 3.02A7.25 7.25 0 0112 4.64z'
                  ></path>
                  <path
                    fill='#4285F4'
                    d='M23.52 12.27c0-.99-.08-1.71-.25-2.46H12v4.46h6.61a5.86 5.86 0 01-2.45 3.89l3.79 2.93c2.26-2.09 3.57-5.17 3.57-8.82z'
                  ></path>
                  <path
                    fill='#FBBC05'
                    d='M5.17 14.37a7.39 7.39 0 01-.01-4.74L1.28 6.6a12.02 12.02 0 000 10.78l3.9-3.02z'
                  ></path>
                  <path
                    fill='#34A853'
                    d='M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.79-2.94a7.1 7.1 0 01-4.16 1.2 7.22 7.22 0 01-6.83-4.99L1.3 17.4A11.97 11.97 0 0012 24z'
                  ></path>
                  <path d='M0 0h24v24H0z'></path>
                </g>
              </svg>
              Continue with Google
            </Button>
            <Button className='btnapple'>
              <svg viewBox='0 0 24 24' class='SVG__IconSVG-sc-741qml-0 jmSzln'>
                <g fill='none' fill-rule='evenodd'>
                  <path
                    d='M12.23 6.74c.88 0 1.99-.6 2.65-1.38a4.4 4.4 0 001.03-2.72c0-.14-.02-.27-.04-.38-.98.03-2.16.65-2.87 1.48a4.18 4.18 0 00-1.07 2.63c0 .15.03.3.04.35l.26.02zM9.13 21.7c1.2 0 1.73-.8 3.24-.8 1.52 0 1.86.78 3.2.78 1.32 0 2.2-1.21 3.03-2.4.93-1.36 1.32-2.7 1.34-2.75a4.27 4.27 0 01-2.6-3.93c0-2.5 1.98-3.62 2.1-3.71a4.6 4.6 0 00-3.87-1.93c-1.48 0-2.68.9-3.44.9-.82 0-1.9-.85-3.18-.85-2.44 0-4.9 2-4.9 5.78 0 2.35.91 4.83 2.04 6.44.97 1.36 1.82 2.47 3.03 2.47z'
                    fill='currentColor'
                    fill-rule='nonzero'
                  ></path>
                </g>
              </svg>
              Continue with Apple
            </Button>
            <Button className='btnfb'>
              <svg viewBox='0 0 24 24' class='SVG__IconSVG-sc-741qml-0 jmSzln'>
                <g transform='translate(2 2)' fill='none' fill-rule='evenodd'>
                  <path
                    d='M20 10.06C20 4.5 15.52 0 10 0S0 4.5 0 10.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H5.9v-2.9h2.54V7.83c0-2.52 1.49-3.91 3.77-3.91 1.1 0 2.24.2 2.24.2V6.6H13.2c-1.24 0-1.63.78-1.63 1.57v1.9h2.78l-.45 2.9h-2.33V20A10.05 10.05 0 0020 10.06'
                    fill='currentColor'
                  ></path>
                </g>
              </svg>
              Continue with Facebook
            </Button>
            <span className='line'></span>
            <Button className='btnemail'>Continue with Email</Button>
          </div>
        </div>
      ) : (
        <div className='login'>
          <h3>Login</h3>
          <div className='d-flex'>
            <div>
              <Form>
                <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                  <Input
                    type='email'
                    name='email'
                    id='exampleEmail'
                    placeholder='something@idk.cool'
                  />
                </FormGroup>
                <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                  <Input
                    type='password'
                    name='password'
                    id='examplePassword'
                    placeholder="don't tell!"
                  />
                </FormGroup>
                <FormGroup check>
                  <Input type='checkbox' name='check' id='exampleCheck' />
                  <Label for='exampleCheck' check>
                    Remember me
                  </Label>
                </FormGroup>
                <Button disabled> Log In</Button>
              </Form>
              <p
                className='forgot-password'
                onClick={() => setForgoPassword(true)}
              >
                Forgot Password?
              </p>
            </div>
            <div className='button-groups'>
              <Button>
                <svg
                  viewBox='0 0 24 24'
                  class='SVG__IconSVG-sc-741qml-0 jmSzln'
                >
                  <g fill='none' fill-rule='evenodd'>
                    <path
                      fill='#EA4335'
                      d='M12 4.64c2.25 0 3.77.97 4.64 1.79l3.39-3.31A11.53 11.53 0 0012 0 12 12 0 001.28 6.61l3.88 3.02A7.25 7.25 0 0112 4.64z'
                    ></path>
                    <path
                      fill='#4285F4'
                      d='M23.52 12.27c0-.99-.08-1.71-.25-2.46H12v4.46h6.61a5.86 5.86 0 01-2.45 3.89l3.79 2.93c2.26-2.09 3.57-5.17 3.57-8.82z'
                    ></path>
                    <path
                      fill='#FBBC05'
                      d='M5.17 14.37a7.39 7.39 0 01-.01-4.74L1.28 6.6a12.02 12.02 0 000 10.78l3.9-3.02z'
                    ></path>
                    <path
                      fill='#34A853'
                      d='M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.79-2.94a7.1 7.1 0 01-4.16 1.2 7.22 7.22 0 01-6.83-4.99L1.3 17.4A11.97 11.97 0 0012 24z'
                    ></path>
                    <path d='M0 0h24v24H0z'></path>
                  </g>
                </svg>
                Continue with Google
              </Button>
              <Button className='btnapple'>
                <svg
                  viewBox='0 0 24 24'
                  class='SVG__IconSVG-sc-741qml-0 jmSzln'
                >
                  <g fill='none' fill-rule='evenodd'>
                    <path
                      d='M12.23 6.74c.88 0 1.99-.6 2.65-1.38a4.4 4.4 0 001.03-2.72c0-.14-.02-.27-.04-.38-.98.03-2.16.65-2.87 1.48a4.18 4.18 0 00-1.07 2.63c0 .15.03.3.04.35l.26.02zM9.13 21.7c1.2 0 1.73-.8 3.24-.8 1.52 0 1.86.78 3.2.78 1.32 0 2.2-1.21 3.03-2.4.93-1.36 1.32-2.7 1.34-2.75a4.27 4.27 0 01-2.6-3.93c0-2.5 1.98-3.62 2.1-3.71a4.6 4.6 0 00-3.87-1.93c-1.48 0-2.68.9-3.44.9-.82 0-1.9-.85-3.18-.85-2.44 0-4.9 2-4.9 5.78 0 2.35.91 4.83 2.04 6.44.97 1.36 1.82 2.47 3.03 2.47z'
                      fill='currentColor'
                      fill-rule='nonzero'
                    ></path>
                  </g>
                </svg>
                Continue with Apple
              </Button>
              <Button className='btnfb'>
                <svg
                  viewBox='0 0 24 24'
                  class='SVG__IconSVG-sc-741qml-0 jmSzln'
                >
                  <g transform='translate(2 2)' fill='none' fill-rule='evenodd'>
                    <path
                      d='M20 10.06C20 4.5 15.52 0 10 0S0 4.5 0 10.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H5.9v-2.9h2.54V7.83c0-2.52 1.49-3.91 3.77-3.91 1.1 0 2.24.2 2.24.2V6.6H13.2c-1.24 0-1.63.78-1.63 1.57v1.9h2.78l-.45 2.9h-2.33V20A10.05 10.05 0 0020 10.06'
                      fill='currentColor'
                    ></path>
                  </g>
                </svg>
                Continue with Facebook
              </Button>
              <span className='line'></span>
              <h5>
                Don't have an account?
                <span onClick={() => setLogin(true)}> Log In</span>
              </h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Authentication;
