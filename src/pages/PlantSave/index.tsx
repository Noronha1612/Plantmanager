import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { SvgFromUri } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Alert, Platform } from 'react-native';
import { isBefore, format } from 'date-fns';

import WaterdropImage from '../../assets/waterdrop.png';
import Button from '../../components/Button';

import { 
    Container, 
    Controller, 
    GoBackButton, 
    InfoContainer, 
    OpenDatePickerButton,
    OpenDatePickerText,
    PickLabel, 
    PlantAbout, 
    PlantName,
    TipContainer,
    TipImage,
    TipText
} from './styles';

import { Plant } from '../../@types/interfaces';
import { PlantsController, StorageblePlant } from '../../libs/storage';
import Waterdrop from '../../components/Waterdrop';

const plantsController = new PlantsController();

interface Params {
    plant: Plant
}

const PlantSave: React.FC = () => {
    const route = useRoute();
    const { plant } = route.params as Params;
    const navigator = useNavigation();

    const [ isSaving, setIsSaving ] = useState(false);

    const [ selectedDateTime, setSelectedDateTime ] = useState(new Date());
    const [ showDatePicker, setShowDatePicker ] = useState(Platform.OS === 'ios' ? true : false);

    const handleGoBack = () => {
        navigator.goBack();
    }

    const handleChangeTime = (_: Event, dateTime: Date | undefined) => {
        if ( Platform.OS === 'android' ) 
            setShowDatePicker(oldState => !oldState);

        // if ( dateTime && isBefore(dateTime, new Date()) ) {
        //     setSelectedDateTime(new Date());
        //     return Alert.alert('Opss...', 'Escolha um momento no futuro! 😅')
        // }

        if (dateTime) setSelectedDateTime(dateTime);
    }

    const handleSubmit = async () => {
        const plantToBeSaved: StorageblePlant = {
            ...plant,
            dateTimeNotification: selectedDateTime
        }

        setIsSaving(true);

        plantsController.savePlant(plantToBeSaved)
            .then(_ => {
                navigator.navigate('SaveConfirmation');
            }).catch(err => {
                    Alert.alert('Não foi possível salvar. 😥')
                }).finally(() => setIsSaving(false));
    }

    return (
        <Container>
            <InfoContainer>
                <GoBackButton
                    onPress={ handleGoBack } 
                >
                    <Feather 
                        name="chevron-left"
                        size={36}
                    />
                </GoBackButton>

                <SvgFromUri 
                    uri={ plant.photo }
                    height={180}
                    width={180}
                /> 

                <PlantName>{ plant.name }</PlantName>
                <PlantAbout>{ plant.about }</PlantAbout>
            </InfoContainer>

            <Controller>
                <Waterdrop 
                    imageSource={ WaterdropImage }
                    text={ plant.water_tips }
                />

                <PickLabel>
                    Escolha o melhor horário para ser lembrado:
                </PickLabel>

                {Platform.OS === 'android' && (
                    <OpenDatePickerButton
                        onPress={ () => setShowDatePicker(oldState => !oldState) }
                    >
                        <OpenDatePickerText>{`Mudar ${ format(selectedDateTime, 'HH:mm') } ⏰`}</OpenDatePickerText>
                    </OpenDatePickerButton>
                )}

                {
                    showDatePicker && (
                        <DateTimePicker 
                            value={selectedDateTime}
                            mode='time'
                            display='spinner'
                            onChange={ handleChangeTime as any }
                        />
                )}

                <Button 
                    text="Cadastrar planta"
                    onPress={ handleSubmit }
                    activeOpacity={.6}
                    loading={ isSaving }
                />

            </Controller>
        </Container>
    );
}

export default PlantSave;