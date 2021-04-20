import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const ContentWrapper = styled.View`
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 20px;
`;

export const MainTitle = styled.Text`
    font-family: '${ fonts.heading }';
    line-height: 34px;
    font-size: 28px;
    text-align: center;
    color: ${ colors.heading };
`;

export const MainSubtitle = styled.Text`
    text-align: center;
    font-size: 18px;
    font-family: '${ fonts.text }';
    padding: 0 20px;
    color: ${ colors.heading };
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