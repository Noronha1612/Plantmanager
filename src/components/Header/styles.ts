import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 20px 0;
    margin-top: ${ getStatusBarHeight() }px;
`;

const headerTextCss = css`
    font-size: 32px;
    line-height: 36px;
    max-width: ${ Dimensions.get('window').width * 0.7 }px;
    color: ${ colors.heading };
`;

export const Greetings = styled.Text`
    ${ headerTextCss };
    font-family: ${ fonts.thinText };
`;

export const UserName = styled.Text`
    ${ headerTextCss };
    font-family: ${ fonts.heading };
`;

export const ImageWrapper = styled.View`
    width: 56px;
    height: 56px;
    background-color: ${ colors.green };
    border-radius: 100px;
`;

export const UserImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 100px;
`;
