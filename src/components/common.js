import styled from 'styled-components';

// Variables
const defaultColor = '#FFFFFF';
const primaryColor = '#A9C5BA';


// Styled Components
export const Container = styled.section`
    background-color: ${props => props.theme.bgColor};
    display: flex;
    width: 100vw;
    height: 100vh;
`

export const FormContainer = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${props => props.theme.bgColor};
`

export const SliderContainer = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${props => props.theme.bgColor};

    @media(max-width: 767px) {
        display: none;
    }
`


// Default Props
Container.defaultProps = {
    theme: {
        bgColor: defaultColor
    }
};

FormContainer.defaultProps = {
    theme: {
        bgColor: defaultColor
    }
};

SliderContainer.defaultProps = {
    theme: {
        bgColor: primaryColor
    }
};