import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
    padding: 0 32px;
`;

export const PlantsContainer = styled.View`
    margin-top: 40px;
    flex: 1;
`;

export const PlantsTitle = styled.Text`
    font-family: ${ fonts.heading };
    font-size: 24px;
    line-height: 32px;
    color: ${ colors.heading };
`;

export const PlantsList = styled.FlatList`
    margin-top: 16px;
    flex: 1;
`;

// Plant Card Styles

export const PlantCard = styled(RectButton)`
    background-color: ${ colors.shape };
    border-radius: 20px;

    padding: 20px 26px;
    margin-bottom: 20px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const PlantName = styled.Text`
    width: 55%;
    text-align: left;

    font-family: ${ fonts.mediumText };
    font-size: 17px;
    color: ${ colors.body_text };
    line-height: 25px;
`;

export const DateWrapper = styled.View`
    align-items: flex-end;
`;

export const DateLabel = styled.Text`
    font-family: ${ fonts.mediumText };
    font-size: 13px;
    line-height: 20px;
    color: ${ colors.body_light };
`;

export const DateTime = styled.Text`
    font-family: ${ fonts.text };
    font-size: 13px;
    line-height: 20px;
    color: ${ colors.body_text };
`;
