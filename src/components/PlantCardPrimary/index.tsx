import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { CardContainer, PlantImage, PlantName } from './styles';

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
    }
}

const PlantCardPrimary: React.FC<PlantProps> = ({ data, ...props }) => {
    return (
        <CardContainer
            {...props}>
                <PlantImage 
                    uri={ data.photo }
                    width={ 70 }
                    height={ 70 }
                />
                <PlantName>{data.name}</PlantName>
        </CardContainer>
    );
}

export default PlantCardPrimary;