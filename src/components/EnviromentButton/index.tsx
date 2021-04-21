import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface ButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

const EnviromentButton: React.FC<ButtonProps> = ({ 
    title, 
    active = false, 
    ...props 
}) => {
    return (
        <Container active={ active } { ...props }>
            <Title active={ active }>{title}</Title>
        </Container>
    );
}

export default EnviromentButton;