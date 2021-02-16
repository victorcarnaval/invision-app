import styled from 'styled-components';
import * as CONSTS from '../constants';

export const Container = styled.section`
    background-color: ${CONSTS.defaultColor};
    display: flex;
    width: 100vw;
    height: 100vh;
`

export const LeftContainer = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${CONSTS.primaryColor};

    @media(max-width: 767px) {
        display: none;
    }
`

export const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${CONSTS.defaultColor};
    padding: 60px 80px;
`

export const InvisionContainer = styled.div`

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