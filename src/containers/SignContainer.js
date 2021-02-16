import styled from 'styled-components';
import Slider from '../components/Slider';
import * as CONSTS from '../constants';

export const Container = styled.section`
    background-color: ${CONSTS.defaultColor};
    display: flex;
    width: 100vw;
    min-height: 100vh;
`

export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-color: ${CONSTS.primaryColor};

    @media(max-width: 767px) {
        display: none;
    }
`

export const RightContainer = styled.div`
    width: 50%;
    background-color: ${CONSTS.defaultColor};
    padding-bottom: 20px;

    @media(max-width: 767px) {
        width: 100%;
    }
`

export const InvisionContainer = styled.div`
    width: 80%;
    margin: 60px auto 0 auto;

    h2 {
        font-size: ${CONSTS.fontSizeH2};
        text-align: right;
        margin-bottom: 50px;
    }
`

export const FormContainer = styled.div`
    margin: 0 auto;
    max-width: 300px;
    text-align: center;
`

const SignContainer = props => {

    return (
        <Container>
            <LeftContainer>
                <Slider />
            </LeftContainer>
            <RightContainer>
                <InvisionContainer>
                    <h2>Invision</h2>
                    <FormContainer>
                        {props.children}
                    </FormContainer>
                </InvisionContainer>
            </RightContainer>
        </Container>
    );
}

export default SignContainer;