import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
`;

export const MainTitle = styled.Text`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    color: ${ colors.heading };
`;

export const MainSubtitle = styled.Text`
    text-align: center;
    font-size: 18px;
    padding: 0 20px;
    color: ${ colors.heading }
`;

export const MainImage = styled.Image`
    height: ${ Dimensions.get('window').width * .7 }px;
`;

export const EnterButton = styled.TouchableOpacity`
    background-color: ${ colors.green };
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    height: 56px;
    width: 56px;
`;

export const ButtonText = styled.Text`
    color: ${ colors.white };
`;