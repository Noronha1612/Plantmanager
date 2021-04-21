import styled, { css } from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${ colors.background };
`;

export const Content = styled.View`
    flex: 1;
    padding: 0 32px;
`

const descriptionCss = css`
    font-size: 17px;
    color: ${ colors.heading };
    line-height: 23px;
`;

export const DescriptionBold = styled.Text`
    ${ descriptionCss };
    font-family: ${ fonts.mediumText };
`;

export const Description = styled.Text`
    ${ descriptionCss };
    font-family: ${ fonts.complement };
`;

export const EnviromentList = styled.FlatList`
    max-height: 45px;
    height: 45px;
    min-height: 45px;
    padding-bottom: 5px;
    margin: 32px 0;   
`;

export const PlantList = styled.FlatList`

`;