import React from 'react';
import { View } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

import UserImageUrl from '../../assets/userImage.png';

import { 
    Container, 
    Greetings, 
    ImageWrapper, 
    UserImage, 
    UserName 
} from './styles';

const Header: React.FC<SafeAreaViewProps> = ({style, ...props}) => {
    return (
        <Container {...props}>
            <View>
                <Greetings>Olá,</Greetings>
                <UserName>Noronha</UserName>
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