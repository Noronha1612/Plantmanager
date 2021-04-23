import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;  
`;

export const InfoContainer = styled.View`
    position: relative;

    padding: 80px 20px;

    background-color: ${ colors.shape };

    align-items: center;
`;

export const GoBackButton = styled(RectButton)`
    position: absolute;
    left: 16px;
    top: 64px;

    height: 40px;
    width: 40px;

    justify-content: center;
    align-items: center;
`;

export const PlantName = styled.Text`
    margin-top: 32px;

    font-size: 24px;
    font-family: ${ fonts.heading };
    color: ${ colors.heading };
    line-height: 32px;
`;

export const PlantAbout = styled.Text`
    margin-top: 16px;

    font-size: 17px;
    font-family: ${ fonts.complement };
    text-align: center;
    line-height: 25px;

    width: 100%;
`;

export const Controller = styled.View`
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: ${ getBottomSpace() || 40 }px;

    transform: translateY(-44px);
`;

export const TipContainer = styled.View`
    height: 88px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 16px;

    background-color: ${ colors.blue_light };
    border-radius: 20px;
`;

export const TipText = styled.Text`
    font-family: ${ fonts.text };
    font-size: 16px;
    line-height: 23px;
    color: ${ colors.blue };

    max-width: ${ Dimensions.get('window').width * 0.6 }px;
`;

export const TipImage = styled.Image`
    width: 56px;
    height: 56px;
`;

export const PickLabel = styled.Text`
    margin-top: 40px;
    margin-bottom: 16px;

    font-family: ${ fonts.complement };
    line-height: 23px;
    font-size: 15px;
    color: ${ colors.body_text };
    text-align: center;
`;

export const OpenDatePickerButton = styled(RectButton)`
    background-color: ${ colors.blue_light };

    justify-content: center;
    align-items: center;

    padding: 20px 0;
    border-radius: 12px;

    margin-bottom: 40px;
`;

export const OpenDatePickerText = styled.Text`
    font-family: ${ fonts.complement };
    line-height: 23px;
    font-size: 18px;
    color: ${ colors.blue };
`;