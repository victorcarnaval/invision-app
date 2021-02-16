import styled from 'styled-components';

import FirstImage from '../assets/Data.png';

const Carousel = styled.div``

const Item = styled.div`
    position: relative;
`

const Image = styled.div`
    img {
        max-width: 500px;
        width: 100%;
    }
`

const Description = styled.div``

const Slider = props => {

    return (
        <Carousel>
            <Item>
                <Image>
                    <img src={FirstImage} alt="Desenho de pessoas lendo e organizando gráficos para um dashboard" width="500" />
                </Image>
                {/* <Description>
                    <h3>Marcenas mattis egestas</h3>
                    <p>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
                </Description> */}
            </Item>
        </Carousel>
    );
}

export default Slider;