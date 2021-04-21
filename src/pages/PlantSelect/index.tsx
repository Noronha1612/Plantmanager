import React, { useMemo, useState } from 'react';
import EnviromentButton from '../../components/EnviromentButton';
import Header from '../../components/Header';

import { 
    Container, 
    Content, 
    Description, 
    DescriptionBold, 
    EnviromentList
} from './styles';

const PlantSelect: React.FC = () => {
    const enviroments = useMemo(() => 
        ['Cozinha', 'Quarto', 'Porão', 'Garagem', 'Terraço']
    , []);

    const [ currentEnviroment, setCurrentEnviroment ] = useState('Cozinha');

    return (
        <Container>
            <Content>
                <Header />

                <DescriptionBold>Em qual ambiente</DescriptionBold>
                <Description>você quer colocar sua planta?</Description>
            
                <EnviromentList 
                    data={ enviroments }
                    renderItem={ ({ item, index }) => 
                        <EnviromentButton
                            key={ index }
                            title={ item as string }
                            active={ currentEnviroment.localeCompare(item as string) === 0 }
                            onPress={ () => setCurrentEnviroment(item as string) }
                        />
                    }
                    horizontal
                    showsHorizontalScrollIndicator={ false }
                />
            </Content>
        </Container>
    );
}

export default PlantSelect;