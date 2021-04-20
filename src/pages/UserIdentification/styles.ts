import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export const Container = styled.SafeAreaView`
    flex: 1;
    width: 100%;
`;

export const ContentWrapper = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`;

export const Form = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 54px;
    width: 100%;
`;

export const Emoji = styled.Text`
    font-size: 44px;
`;

export const FormHeader = styled.Text`
    font-size: 24px;
    text-align: center;
    color: ${ colors.heading };
    font-family: '${ fonts.heading }';
    line-height: 32px;
    margin-top: 20px;
`;

export const InputField = styled.TextInput<{ isFocused: boolean }>`
    border-bottom-width: 1px;
    border-color: ${ props => props.isFocused ? 
        colors.green : 
        colors.gray };
    color: ${ colors.heading };
    width: 100%;
    font-size: 18px;
    margin-top: 50px;
    padding: 10px;
    text-align: center;
`;

export const FormFooter = styled.View`
    margin-top: 40px;
    width: 100%;

    padding: 0 20px;
`;