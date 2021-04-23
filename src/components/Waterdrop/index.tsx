import React from 'react';

import WaterdropImage from '../../assets/waterdrop.png'

import { TipContainer, TipImage, TipText } from './styles';

interface WaterdropProps {
    text: string;
}

const Waterdrop: React.FC<WaterdropProps> = (props) => {
    return (
        <TipContainer>
            <TipImage
                source={WaterdropImage} 
            />
            <TipText>
                { props.text }
            </TipText>
        </TipContainer>
    );
}

export default Waterdrop;