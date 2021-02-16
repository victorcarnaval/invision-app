import { useState } from 'react';
import styled from 'styled-components';

import * as CONSTS from '../constants';
import SignContainer from '../containers/SignContainer';
import GoogleIcon from '../assets/google_icon.svg';

const Form = styled.form`
    h3 {
        font-weight: 400;
        color: ${CONSTS.secondaryColor};
        font-size: ${CONSTS.fontSizeH3};
        margin-bottom: 50px;
    }
`

const Field = styled.div`
    text-align: left;

    label {
        color: ${CONSTS.secondaryColor};
        font-size: ${CONSTS.fontSizeText};
    }

    input {
        display: block;
        width: 100%;
        margin-bottom: 5px;
        padding: 10px 15px;
        border-color: ${CONSTS.secondaryColor};
        border-top: transparent;
        border-right: transparent;
        border-left: transparent;
        border-width: 1px;
        outline: none;
        font-size: 11px;
    }

    .forgot-password {
        margin-top: 10px;
        display: block;
        text-align: right;
        font-size: ${CONSTS.fontSizeText};
        color: ${CONSTS.secondaryColor};
        text-decoration: none;
    }
`

const Button = styled.button`
    border-radius: 100px;
    border: none;
    box-shadow: none;
    outline: none;
    padding: 10px 20px;
    background-color: ${CONSTS.secondaryColor};
    color: ${CONSTS.defaultColor};
    font-size: ${CONSTS.fontSizeButton};
    margin: ${CONSTS.marginBottom} 0;
    min-width: 120px;
`

const Divider = styled.div`
    width: 70%; 
    text-align: center; 
    border-bottom: 1px solid ${CONSTS.secondaryColor}; 
    line-height: 0.1em;
    margin: ${CONSTS.marginBottom} auto;

    span {
        background:#fff; 
        padding:0 10px;
        color: ${CONSTS.secondaryColor};
        font-size: ${CONSTS.fontSizeText};
    }
`

const GoogleButton = styled(Button)`
    padding: 5px 20px;
    background-color: ${CONSTS.defaultColor};
    box-shadow: 0px 3px 6px #00000029;
    color: #000000;

    img {
        vertical-align: middle;
        margin-right: 15px;
    }
`

const HelperText = styled.p`
    color: ${CONSTS.secondaryColor};
    font-size: ${CONSTS.fontSizeText};

    span {
        font-weight: bold;
    }

    a {
        font-size: ${CONSTS.fontSizeLink};
        color: ${CONSTS.linkColor};
    }
`

const SignInUp = props => {

    const [isSignup, setIsSignup] = useState(false);

    const toggleIsSignup = () => {
        setIsSignup(!isSignup);
    }


    return (
        <SignContainer>
            {!isSignup && <>
                <Form>
                    <h3>Welcome to Invision</h3>
                    <Field>
                        <label>Users name or Email</label>
                        <input type="text" />
                    </Field>
                    <Field>
                        <label>Password</label>
                        <input type="password" />
                        <a className="forgot-password" href="#">Forgot password?</a>
                    </Field>
                    <Button>Sign in</Button>
                    <Divider>
                        <span>Or</span>
                    </Divider>
                    <GoogleButton>
                        <img src={GoogleIcon} alt="Ícone do Google" width="20" />
                        <span>Sign in with Google</span>
                    </GoogleButton>
                </Form>
                <HelperText>
                    New <span>Invision?</span>{' '}
                    <a href="#" onClick={toggleIsSignup}>Create Account</a>
                </HelperText>
            </>}
            {isSignup && <>
                <Form>
                    <h3>Getting Started</h3>
                    <Field>
                        <label>Full Name</label>
                        <input type="text" />
                    </Field>
                    <Field>
                        <label>Users name or Email</label>
                        <input type="text" />
                    </Field>
                    <Field>
                        <label>Create Password</label>
                        <input type="password" />
                    </Field>
                    <Button>Sign up</Button>
                    <Divider>
                        <span>Or</span>
                    </Divider>
                    <GoogleButton>
                        <img src={GoogleIcon} alt="Ícone do Google" width="20" />
                        <span>Sign up with Google</span>
                    </GoogleButton>
                </Form>
                <HelperText>
                    By signing up, you agree to <span>Invision</span><br />
                    <a href="#">Terms of Conditions</a> and <a href="#">Privacy Policy</a>
                </HelperText>
                <HelperText>
                    Already on <span>Invision?</span>{' '}
                    <a href="#" onClick={toggleIsSignup}>Log in</a>
                </HelperText>
            </>}
        </SignContainer>
    );
}

export default SignInUp;