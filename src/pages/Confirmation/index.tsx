import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import Button from '../../components/Button';

import { 
    Container, 
    Content,
    Emoji,
    SubTitle,
    FooterContent,
    Title
} from './styles';

const Confirmation: React.FC = () => {
    const navigator = useNavigation();

    const handleStart = useCallback(() => {
        navigator.navigate('PlantSelect');
    }, [ navigator ]);

    return (
        <Container>
            <Content>
                <Emoji>😄</Emoji>

                <Title>Prontinho</Title>

                <SubTitle>
                    Agora vamos começar a cuidar das 
                    suas plantinhas com muito cuidado
                </SubTitle>

                <FooterContent>
                    <Button 
                        onPress={ handleStart }
                        text="Começar" />
                </FooterContent>
            </Content>

        </Container>
    );
}

export default Confirmation;