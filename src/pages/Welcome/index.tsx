import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import { 
    Container, 
    ContentWrapper, 
    EnterButton, 
    MainImage, 
    MainSubtitle, 
    MainTitle 
} from './styles';

import Watering from '../../assets/watering.png';

const Welcome: React.FC = () => {
    const navigator = useNavigation();

    return  (
        <Container>
            <ContentWrapper>
                <MainTitle>
                    Gerencie {'\n'}
                    suas plantas de {'\n'}
                    forma fácil.
                </MainTitle>
            
                <MainImage 
                    source={ Watering }
                    resizeMode="contain" />

                <MainSubtitle>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar
                </MainSubtitle>

                <EnterButton
                    activeOpacity={.7}
                    onPress={ () => navigator.navigate('UserIdentification') }
                >
                    <Feather 
                        color="#FFF"
                        name="chevron-right" 
                        size={32} />    
                </EnterButton>
            </ContentWrapper>
        </Container>
    );
}

export default Welcome;