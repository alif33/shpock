import React,{ useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useMutation, useQueryClient } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { 
    toggleModal,
    attemptToForget,
    attemptToSignup
 } from "../../../redux/settings/actions";
import { 
    userLogin
 } from "../../../redux/users/actions";
 import { postData } from '../../../services/HttpService'
 import { regEmail, regPass } from '../../../regex'
 import { toast } from 'react-toastify';

const Login = () => {
    const [ email, setEmail ] = useState('ismail@gmail.com');
    const [ password, setPassword ] = useState('password');

    const { settings, users } = useSelector(state=>state)
    const dispatch = useDispatch()

    const successFullyLogedIn = ({ token }) =>{
        dispatch(userLogin(token)) 
        dispatch(toggleModal(settings.modal))
        toast.success('Successfully Loggedin.')
    }

    const handleSubmit = async event => {
        event.preventDefault()
        if(regEmail.test(email) && password){
            const user = await postData('/user/login', {email, password})  
            user?.success ? successFullyLogedIn(user) : toast.error('Invalid Credentials')
        }
        else{
            toast.error('😢Invalid Email or Password.')
        }
    }

    return (
        <div className='login'>
            <h3>Login</h3>
            <div className='d-flex'>
            <div>
                <Form onSubmit={ e =>handleSubmit(e) }>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                        <Input
                            type='email'
                            name='email'
                            id='exampleEmail'
                            placeholder='something@idk.cool'
                            // required
                            onChange={ mail=>setEmail(mail.target.value) }
                        />
                    </FormGroup>
                    <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                        <Input
                        type='password'
                        name='password'
                        id='examplePassword'
                        placeholder="don't tell!"
                        // required
                        onChange={pass=>setPassword(pass.target.value)}
                        />
                    </FormGroup>
                    <FormGroup check>
                        <Input type='checkbox' name='check' id='exampleCheck' />
                        <Label for='exampleCheck' check>
                        Remember me
                        </Label>
                    </FormGroup>
                    <Button type="submit"> Log In</Button>
                </Form>
                <p
                className='forgot-password'
                onClick={() => dispatch(attemptToForget()) }
                >
                Forgot Password?
                </p>
            </div>
            <div className='button-groups'>
                <Button>
                <svg
                    viewBox='0 0 24 24'
                    className='SVG__IconSVG-sc-741qml-0 jmSzln'
                >
                    <g fill='none' fillRule='evenodd'>
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
                    className='SVG__IconSVG-sc-741qml-0 jmSzln'
                >
                    <g fill='none' fillRule='evenodd'>
                    <path
                        d='M12.23 6.74c.88 0 1.99-.6 2.65-1.38a4.4 4.4 0 001.03-2.72c0-.14-.02-.27-.04-.38-.98.03-2.16.65-2.87 1.48a4.18 4.18 0 00-1.07 2.63c0 .15.03.3.04.35l.26.02zM9.13 21.7c1.2 0 1.73-.8 3.24-.8 1.52 0 1.86.78 3.2.78 1.32 0 2.2-1.21 3.03-2.4.93-1.36 1.32-2.7 1.34-2.75a4.27 4.27 0 01-2.6-3.93c0-2.5 1.98-3.62 2.1-3.71a4.6 4.6 0 00-3.87-1.93c-1.48 0-2.68.9-3.44.9-.82 0-1.9-.85-3.18-.85-2.44 0-4.9 2-4.9 5.78 0 2.35.91 4.83 2.04 6.44.97 1.36 1.82 2.47 3.03 2.47z'
                        fill='currentColor'
                        fillRule='nonzero'
                    ></path>
                    </g>
                </svg>
                Continue with Apple
                </Button>
                <Button className='btnfb'>
                <svg
                    viewBox='0 0 24 24'
                    className='SVG__IconSVG-sc-741qml-0 jmSzln'
                >
                    <g transform='translate(2 2)' fill='none' fillRule='evenodd'>
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
                <span onClick={() => dispatch(attemptToSignup()) }> Register</span>
                </h5>
            </div>
            </div>
        </div>
    )
};

export default Login;
