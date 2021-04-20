import React from 'react';

import { ButtonText, Container, EnterButton, MainImage, MainSubtitle, MainTitle } from './styles';

import Watering from '../../assets/watering.png';

const Welcome: React.FC = () => {
    return  (
        <Container>
            <MainTitle>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil.
            </MainTitle>
        
            <MainImage source={ Watering } />

            <MainSubtitle>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar
            </MainSubtitle>

            <EnterButton
                activeOpacity={.7}
            >
                <ButtonText>{'>'}</ButtonText>
            </EnterButton>
        </Container>
    );
}

export default Welcome;