import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

`;

export const Emoji = styled.Text`
    font-size: 78px;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-family: ${ fonts.heading };
    text-align: center;
    color: ${ colors.heading };
    line-height: 38px;
    margin-top: 10px;
`;

export const SubTitle = styled.Text`
    font-family: ${ fonts.text };
    font-size: 17px;
    text-align: center;
    color: ${ colors.heading };
    padding: 0 20px;
`;

export const FooterContent = styled.View`
    width: 100%;
    margin-top: 32px;
    padding: 0 50px;
`;