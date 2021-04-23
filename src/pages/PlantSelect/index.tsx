import { useNavigation } from '@react-navigation/core';
import React, {  useEffect, useState } from 'react';
import { ActivityIndicator, ListRenderItem } from 'react-native';
import colors from '../../../styles/colors';
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
    const navigator = useNavigation();

    const [ enviroments, setEnviroments ] = useState<Enviroment[]>([]);
    const [ currentEnviroment, setCurrentEnviroment ] = useState('');

    const [ plants, setPlants ] = useState<Plant[]>([]);
    const [ filteredPlants, setFilteredPlants ] = useState<Plant[]>([]);

    const [ page, setPage ] = useState(1);
    const [ loadingMore, setLoadingMore ] = useState(false);

    const [ loading, setLoading ] = useState(true);

    // Keeps filteredPlants filtered
    useEffect(() => {
        setFilteredPlants(plants.filter(plant => {
            if ( currentEnviroment === 'all' ) return true;

            return plant.environments.includes(currentEnviroment);
        }));
    }, [ plants, currentEnviroment ]);

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
        getPlants();
    }, []);
    
    const getPlants = async () => {
        const { data: plants } = await api
            .get<Plant[]>(`plants?_sort=name&order=asc&_page=${ page }&_limit=8`)

        if ( page > 1 ) setPlants(oldValue => [...oldValue, ...plants]);
        else setPlants(plants);
        
        setLoadingMore(false);
    }

    const handleFetchMore = (distance: number) => {
        if ( distance < 1 ) return;
        setLoadingMore(true);

        setPage(oldValue => oldValue + 1);
        getPlants();
    }

    const flatListRenderEnvironment: ListRenderItem<Enviroment> = ({ item }) => (
        <EnviromentButton
            title={ item.title }
            active={ currentEnviroment.localeCompare(item.key) === 0 }
            onPress={ () => setCurrentEnviroment(item.key) }
        />
    );
    const flatListRenderPlants: ListRenderItem<Plant> = ({ item }) => (
        <PlantCardPrimary
            data={item}
            onPress={ () => {
                navigator.navigate('PlantSave', { plant: item });
            }}
        />
    );

    if ( loading )
        return <LoadingScreen />

    return (
        <Container>
            <Content>
                <Header newPlant/>

                <DescriptionBold>Em qual ambiente</DescriptionBold>
                <Description>você quer colocar sua planta?</Description>
            
                <EnviromentList
                    keyExtractor={((item: Enviroment) => String(item.key)) as any}
                    data={ enviroments }
                    renderItem={ flatListRenderEnvironment as any }
                    horizontal
                    showsHorizontalScrollIndicator={ false }
                />

                <PlantList
                    data={ filteredPlants }
                    keyExtractor={((item: Plant) => String(item.id)) as any}
                    renderItem={ flatListRenderPlants as any }
                    numColumns={2}
                    showsVerticalScrollIndicator={ false }
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => 
                        handleFetchMore(distanceFromEnd)
                    }
                    ListFooterComponent={
                        loadingMore ? 
                            <ActivityIndicator
                                size={50}
                                style={{ marginVertical: 20 }}
                                color={ colors.green } /> 
                            : 
                            <></>
                    }
                />
            </Content>
        </Container>
    );
}

export default PlantSelect;