import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';

import Button from '../../components/Button';
import SafeSaveOnStorage from '../../utils/SafeSaveOnStorage';

import { 
    Container, 
    ContentWrapper,
    Form,
    Emoji,
    InputField,
    FormHeader,
    FormFooter
} from './styles';

const UserIdentification: React.FC = () => {
    const navigator = useNavigation();

    const [ isFocused, setIsFocused ] = useState(false);
    const [ isFilled, setIsFilled ] = useState(false);
    const [ username, setUsername ] = useState('');

    useEffect(() => { setIsFilled(!!username) }, [ username ]);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleSubmit = useCallback(async () => {
        if ( !username ) 
            return Alert.alert('Ai não...', 'Me diz como chamar você 😢');

        await SafeSaveOnStorage('@plantmanager:username', username);

        navigator.navigate('Confirmation');
    }, [ username, navigator ]);

    return (
        <Container>
            <ContentWrapper
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Form>
                    <Emoji>{isFilled ? '😄' : '😀'}</Emoji>
                    <FormHeader>
                        Como podemos{'\n'} chamar você?
                    </FormHeader>

                    <InputField 
                        onChangeText={ text => setUsername(text) }
                        isFocused={ isFocused || isFilled }
                        placeholder="Digite um nome"
                        onBlur={ handleInputBlur }
                        value={ username }
                        onFocus={ handleInputFocus } />

                    <FormFooter>
                        <Button 
                            onPress={ handleSubmit }
                            text="Confirmar" />
                    </FormFooter>
                </Form>

            </ContentWrapper>
        </Container>
    );
}

export default UserIdentification;