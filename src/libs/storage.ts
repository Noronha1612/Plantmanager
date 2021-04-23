import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';
import { Plant } from '../@types/interfaces';
import SafeSaveOnStorage from '../utils/SafeSaveOnStorage';

export interface StorageblePlant extends Plant {
    dateTimeNotification: Date
}

interface StoragePlantProps {
    [id: string]: {
        data: StorageblePlant;
    }
}

export class PlantsController {
    private storageKey = '@plantmanager:savedPlants';

    async savePlant(plant: StorageblePlant): Promise<void> {
        const rawData = await AsyncStorage.getItem(this.storageKey);
    
        const oldPlants = rawData ? 
            JSON.parse(rawData) as StoragePlantProps : {};
    
        const newPlant: StoragePlantProps = {
            [plant.id]: {
                data: plant
            }
        }
    
        await SafeSaveOnStorage(this.storageKey, JSON.stringify({
            ...oldPlants,
            ...newPlant
        }));
    }

    async loadPlants(): Promise<StorageblePlant[]> {
        const rawData = await AsyncStorage.getItem(this.storageKey);
    
        const plants = rawData ? 
            JSON.parse(rawData) as StoragePlantProps : {};

        const plantsArray = Object
            .values(plants)
            .map(dataObject => dataObject.data)
            .sort((a, b) => 
                Math.floor(
                    new Date(a.dateTimeNotification).getTime() / 1000 -
                    Math.floor(new Date(b.dateTimeNotification).getTime()) / 1000 
                )
            );

        console.log(plantsArray);
        
        return plantsArray;
    }
}