import { useEffect, useState } from 'react';
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
    clear: both;
    overflow: auto;
    zoom: 1;

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
        float: right;
        display: block;
        text-align: right;
        font-size: ${CONSTS.fontSizeText};
        color: ${CONSTS.secondaryColor};
        text-decoration: none;
    }

    &.has-error input {
        border-color: red;
    }
    &.has-error > span {
        float: left;
        font-size: ${CONSTS.fontSizeText};
        color: red;
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

    &:hover {
        cursor: pointer;
        opacity: 0.9;
        transition-duration: 0.3s;
    }

    &:disabled {        
        opacity: 0.9;
        cursor: not-allowed;
    }
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

    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [fullname, setFullname] = useState(undefined);
    const [isValid, setIsValid] = useState(true);
    const [isSignup, setIsSignup] = useState(false);

    const toggleIsSignup = () => {
        setIsSignup(!isSignup);
        setUsername(undefined);
        setPassword(undefined);
        setFullname(undefined);
        setIsValid(true);
    }

    const handleUsername = e => {
        setUsername(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleFullname = e => {
        setFullname(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();

        if (isSignup && username && password && password.length >= 6 && fullname) {
            setIsValid(true);
        } else if (!isSignup && username && password && password.length >= 6) {
            setIsValid(true);
        } else {
            setIsValid(false);
            return;
        }

        console.log({ fullname, username, password });
    }


    return (
        <SignContainer>
            {!isSignup && <>
                <Form onSubmit={onSubmit}>
                    <h3>Welcome to Invision</h3>
                    <Field className={!isValid && !username && 'has-error'}>
                        <label>Users name or Email</label>
                        <input type="email" onChange={handleUsername} />
                        {!isValid && !username && <span>Este campo não pode ser vazio.</span>}
                    </Field>
                    <Field className={!isValid && (!password || password.length < 6) && 'has-error'}>
                        <label>Password</label>
                        <input type="password" onChange={handlePassword} />
                        <a className="forgot-password" href="#">Forgot password?</a>
                        {!isValid && !password && <span>Este campo não pode ser vazio.</span>}
                        {!isValid && password && password.length < 6 && <span>A senha não pode ter menos de 6 caracteres.</span>}
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
                <Form onSubmit={onSubmit}>
                    <h3>Getting Started</h3>
                    <Field className={!isValid && !fullname && 'has-error'}>
                        <label>Full Name</label>
                        <input type="text" onChange={handleFullname} />
                        {!isValid && !fullname && <span>Este campo não pode ser vazio.</span>}
                    </Field>
                    <Field className={!isValid && !username && 'has-error'}>
                        <label>Users name or Email</label>
                        <input type="text" onChange={handleUsername} />
                        {!isValid && !username && <span>Este campo não pode ser vazio.</span>}
                    </Field>
                    <Field className={!isValid && (!password || password.length < 6) && 'has-error'}>
                        <label>Create Password</label>
                        <input type="password" onChange={handlePassword} />
                        {!isValid && !password && <span>Este campo não pode ser vazio.</span>}
                        {!isValid && password && password.length < 6 && <span>A senha não pode ter menos de 6 caracteres.</span>}
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