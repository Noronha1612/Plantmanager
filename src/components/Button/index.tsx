import React, { useState } from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import colors from '../../../styles/colors';

import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    text: string;
    loading?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, style, loading, ...props }) => {
    return (
        <ButtonContainer {...props}>
            <ButtonText>{ 
            loading ? 
                <ActivityIndicator 
                    color={ colors.white }
                    size={ 24 }
                /> : 
                text 
            }</ButtonText>
        </ButtonContainer>
    );
}

export default Button;