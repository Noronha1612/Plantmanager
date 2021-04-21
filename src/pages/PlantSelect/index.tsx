import React, { useEffect, useMemo, useState } from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Enviroment, Plant } from '../../@types/interfaces';
import EnviromentButton from '../../components/EnviromentButton';
import Header from '../../components/Header';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import api from '../../services/api';
import LoadingScreen from '../../utils/LoadingScreen';

import { 
    Container, 
    Content, 
    Description, 
    DescriptionBold, 
    EnviromentList,
    PlantList
} from './styles';

interface RenderItemProps {
    item: Enviroment;
    index: number;
    separator: any;
}

const PlantSelect: React.FC = () => {
    const [ enviroments, setEnviroments ] = useState<Enviroment[]>([]);
    const [ currentEnviroment, setCurrentEnviroment ] = useState('');

    const [ loading, setLoading ] = useState(true);

    const [ plants, setPlants ] = useState<Plant[]>([]);

    // Update loading state
    useEffect(() => {
        
        if ( enviroments.length === 0 || plants.length === 0 ) setLoading(true);
        else setLoading(false);

    }, [ plants, enviroments ]);

    // Fetch environments data
    useEffect(() => {
        const getEnviroments = async () => {
            const { data: enviroments } = await api
                .get<Enviroment[]>('plants_environments?_sort=title&order=asc')

            const allEnviroment: Enviroment = {
                key: 'all',
                title: 'Todos'
            };

            setEnviroments([allEnviroment, ...enviroments]);
            setCurrentEnviroment('all');
        };

        getEnviroments();
    }, []);

    // Fetch plants data
    useEffect(() => {
        const getPlants = async () => {
            const { data: plants } = await api
                .get<Plant[]>('plants?_sort=name&order=asc')

            setPlants(plants);
        };

        getPlants();
    }, []);

    const flatListRenderEnvironment: ListRenderItem<Enviroment> = ({ item }) => (
        <EnviromentButton
            key={ item.key }
            title={ item.title }
            active={ currentEnviroment.localeCompare(item.key) === 0 }
            onPress={ () => setCurrentEnviroment(item.key) }
        />
    );
    const flatListRenderPlants: ListRenderItem<Plant> = ({ item }) => (
        <PlantCardPrimary
            key={ item.id }
            data={item}
            onPress={ () => console.log(item) }
        />
    );

    if ( loading )
        return <LoadingScreen />

    return (
        <Container>
            <Content>
                <Header />

                <DescriptionBold>Em qual ambiente</DescriptionBold>
                <Description>você quer colocar sua planta?</Description>
            
                <EnviromentList
                    data={ enviroments }
                    renderItem={ flatListRenderEnvironment as any }
                    horizontal
                    showsHorizontalScrollIndicator={ false }
                />

                <PlantList
                    data={ 
                        plants.filter((plant) => {
                            if ( currentEnviroment === 'all' )
                                return true;
                            
                            return plant.environments.includes(currentEnviroment);
                        })
                    }
                    keyExtractor={((item: Plant) => item.id) as any}
                    renderItem={ flatListRenderPlants as any }
                    numColumns={2}
                    showsVerticalScrollIndicator={ false }
                />
            </Content>
        </Container>
    );
}

export default PlantSelect;