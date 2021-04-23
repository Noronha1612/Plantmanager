import { useNavigation } from '@react-navigation/core';
import React from 'react';
import Button from '../../../components/Button';

import { 
    ButtonWrapper,
    Container, 
    Content, 
    Description, 
    Emoji, 
    MainTitle
} from './styles';

const SaveConfirmation: React.FC = () => {
    const navigator = useNavigation();

    return (
        <Container>
            <Content>
                <Emoji>🤗</Emoji>
                <MainTitle>Tudo certo</MainTitle>
                <Description>
                    Fique tranquilo que sempre vamos {'\n'}
                    lembrar você de cuidar da sua plantinha {'\n'}
                    com bastante amor.
                </Description>

                <ButtonWrapper>
                    <Button 
                        text="Muito obrigado :D"
                        onPress={() => navigator.navigate('MyPlants')}
                    />
                </ButtonWrapper>
            </Content>
        </Container>
    );
}

export default SaveConfirmation;