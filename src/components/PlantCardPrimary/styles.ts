import { RectButton } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export const CardContainer = styled(RectButton)`
    flex: 1;
    max-width: 45%;
    background-color: ${ colors.shape };
    border-radius: 20px;
    padding: 20px 0;
    align-items: center;
    margin: 10px;
`;

export const PlantName = styled.Text`
    color: ${ colors.green_dark };
    font-family: ${ fonts.heading };
    margin: 16px 0;
`;

export const PlantImage = styled(SvgFromUri)`

`;