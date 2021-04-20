import React, { useCallback, useEffect, useState } from 'react';
import { Platform } from 'react-native';

import Button from '../../components/Button';

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
                        onFocus={ handleInputFocus } />

                    <FormFooter>
                        <Button text="Confirmar" />
                    </FormFooter>
                </Form>

            </ContentWrapper>
        </Container>
    );
}

export default UserIdentification;