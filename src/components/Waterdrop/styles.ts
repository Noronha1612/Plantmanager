import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export const TipContainer = styled.View`
    height: 88px;

    flex-direction: row;
    align-items: center;

    padding: 16px;

    background-color: ${ colors.blue_light };
    border-radius: 20px;
`;

export const TipText = styled.Text`
    font-family: ${ fonts.text };
    font-size: 16px;
    line-height: 23px;
    color: ${ colors.blue };

    max-width: ${ Dimensions.get('window').width * 0.5 }px;
`;

export const TipImage = styled.Image`
    width: 56px;
    height: 56px;
    margin-right: 24px;
`;
