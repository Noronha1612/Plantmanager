import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, ViewProps } from 'react-native';

import UserImageUrl from '../../assets/userImage.png';

import { 
    Container, 
    Greetings, 
    ImageWrapper, 
    UserImage, 
    UserName 
} from './styles';

interface HeaderProps extends ViewProps {
    newPlant?: boolean
}

const Header: React.FC<HeaderProps> = ({style, newPlant, ...props}) => {
    const [ username, setUsername ] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('@plantmanager:username')
            .then(response => setUsername(response || 'Jardineiro'));
    }, []);

    return (
        <Container {...props}>
            <View>
                <Greetings>{ newPlant? 'Olá,' : 'Minhas' }</Greetings>
                <UserName>{  newPlant? username : 'Plantinhas'  }</UserName>
            </View>

            <ImageWrapper>
                <UserImage
                    resizeMode="contain"
                    source={ UserImageUrl } />
            </ImageWrapper>
        </Container>
    );  
}

export default Header;