import { Container, FormContainer, SliderContainer } from '../components/common';

const SignContainer = props => {

    return (
        <Container>
            <SliderContainer>

            </SliderContainer>
            <FormContainer>
                {props.Children}
            </FormContainer>
        </Container>
    );
}

export default SignContainer;