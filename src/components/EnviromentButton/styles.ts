import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export const Container = styled(RectButton)<{ active: boolean }>`
    width: 76px;
    height: 40px;

    background-color: ${ props => props.active ? colors.green_light : colors.shape };
    border-radius: 12px;

    justify-content: center;
    align-items: center;

    margin-right: 12px;
`;

export const Title = styled.Text<{ active: boolean }>`
    color: ${ props => props.active? colors.green_dark : colors.heading };
    font-family: ${ props => props.active ? fonts.heading : fonts.text };
    font-size: 13px;
    line-height: 23px;
`;
