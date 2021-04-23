import React, { useEffect, useState } from 'react';
import { format, formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { 
    Container, 
    PlantsContainer, 
    PlantsList, 
    PlantsTitle,
    PlantCard,
    PlantName,
    DateWrapper,
    DateLabel,
    DateTime,
    Content
} from './styles';

import WaterdropImage from '../../assets/waterdrop.png'

import Header from '../../components/Header';
import { PlantsController, StorageblePlant } from '../../libs/storage';
import LoadingScreen from '../../utils/LoadingScreen';
import { ListRenderItem } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import Waterdrop from '../../components/Waterdrop';

const plantsController = new PlantsController();

const MyPlants: React.FC = () => {
    const [ plants, setPlants ] = useState<StorageblePlant[]>([]);
    const [ isPlantsLoading, setIsPlantsLoading ] = useState(true);
    const [ nextWatered, setNextWatered ] = useState('Vou te lembrar de regar suas plantinhas aqui');

    useEffect(() => {
        plantsController.loadPlants().then(response => {

            if ( response.length !== 0 ) {
                const nextTime = formatDistance(
                    new Date(response[0].dateTimeNotification).getTime(),
                    new Date().getTime(), { locale: ptBR }
                );
    
                setNextWatered(
                    `Não esqueça de regar a ${response[0].name} às ${ nextTime }`
                );
            }

            setPlants(response);
            setIsPlantsLoading(false);
        });
    }, []);

    const renderPlantCard: ListRenderItem<StorageblePlant> = ({ item }) => (
        <PlantCard>
            <SvgFromUri 
                width={ 50 }
                height={ 50 }
                uri={ item.photo }
            />

            <PlantName>{ item.name }</PlantName>

            <DateWrapper>
                <DateLabel>Regar às</DateLabel>
                <DateTime>{format(new Date(item.dateTimeNotification), 'HH:mm')}</DateTime>
            </DateWrapper>
        </PlantCard>
    );

    if ( isPlantsLoading ) 
        return <LoadingScreen />

    return (
        <Container>
            <Content>
                <Header />

                <Waterdrop 
                    text={ nextWatered }
                />

                <PlantsContainer>
                    <PlantsTitle>
                        Próximas regadas
                    </PlantsTitle>

                    <PlantsList 
                        data={ plants }
                        keyExtractor={((item: StorageblePlant) => String(item.id)) as any}
                        renderItem={ renderPlantCard as any }
                        showsVerticalScrollIndicator={ false }
                    />
                </PlantsContainer>
            </Content>
        </Container>
    );
}

export default MyPlants;