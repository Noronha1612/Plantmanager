import styled from 'styled-components/native';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    padding: 0 40px;
`;

export const Emoji = styled.Text`
    font-size: 100px;
    margin-bottom: 64px;
`;

export const MainTitle = styled.Text`
    font-family: ${ fonts.heading };
    color: ${ colors.heading };
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 16px;
`;

export const Description = styled.Text`
    font-family: ${ fonts.text };
    font-size: 17px;
    line-height: 25px;
    color: ${ colors.body_text };
    text-align: center;

    margin-bottom: 40px;
`;

export const ButtonWrapper = styled.View`
    width: 100%;
    padding: 0 32px;
`;